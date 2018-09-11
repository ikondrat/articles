import {
  REQUEST_ARTICLES,
  RECEIVE_ARTICLES,
  REQUEST_PAGE,
  RECIEVE_PAGE
} from '../actions'

const articles = (state = {
  isFetching: false,
  list: []
}, action) => {
  switch (action.type) {
    case REQUEST_ARTICLES:
    case REQUEST_PAGE:
      return {
        ...state,
        isFetching: true
      };
    case RECEIVE_ARTICLES:
    case RECIEVE_PAGE:
      return {
        ...state,
        isFetching: false,
        ...action,
        list: action.articles.filter(a => a.title && a.title.length)
      };
    default:
      return state
  }
}

export default articles
