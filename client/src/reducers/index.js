import { combineReducers } from 'redux';
import ArticleReducer from './articles';

const rootReducer = combineReducers({
  articles: ArticleReducer
});

export default rootReducer;
