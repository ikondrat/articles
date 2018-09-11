import {
  REQUEST_ARTICLE,
  RECEIVE_ARTICLE
} from '../actions'

const article = (state = {
  isFetching: false,
  articleDetails: null
}, action) => {
  switch (action.type) {
    case REQUEST_ARTICLE:
      return {
        ...state,
        isFetching: true,
        articleDetails: null
      };
    case RECEIVE_ARTICLE:
      return {
        isFetching: false,
        articleDetails: action.article
      };
    default:
      return state
  }
}

export default article
