import { combineReducers } from 'redux'
import articles from './articles';
import article from './article';

const rootReducer = combineReducers({
  articles,
  article
})

export default rootReducer
