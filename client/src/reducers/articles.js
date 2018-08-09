import { FETCH_ARTICLES, FETCH_ARTICLES_SUCCESS, FETCH_ARTICLES_FAILURE } from '../actions/index';

const initialState =  {
  articles: [],
  selectedArticle: {},
  status: {
    isFetching: true,
    hasErrored: false,
    error: null,
  }
};

export default function(state = initialState, action){
  switch (action.type){
    case FETCH_ARTICLES:
      return {
        articles: [],
        status: {
          isFetching: true,
          hasErrored: false,
          error: null,
        }
      }
    case FETCH_ARTICLES_SUCCESS:
      return {
        articles: action.articles,
        status: {
          isFetching: false,
          hasErrored: false,
          error: null,
        },
      };
    case FETCH_ARTICLES_FAILURE:
      return {
        articles: [],
        status: {
          isFetching: false,
          hasErrored: true,
          error: action.error,
        }
      };
    default:
      return state
  }
}
