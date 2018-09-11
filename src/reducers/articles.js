import {
  REQUEST_ARTICLES,
  RECEIVE_ARTICLES
} from '../actions'

const articles = (state = {
  isFetching: false,
  list: [],
  pages: 0,
  page: 0,
}, action) => {
  switch (action.type) {
    case REQUEST_ARTICLES:
      return {
        ...state,
        isFetching: true,
        list: []
      };
    case RECEIVE_ARTICLES:
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
