export const FETCH_ARTICLES = 'FETCH_ARTICLES';
export const FETCH_ARTICLES_SUCCESS = 'FETCH_ARTICLES_SUCCESS';
export const FETCH_ARTICLES_FAILURE = 'FETCH_ARTICLES_FAILURE';

export const API = '/api/v1/';

export function fetchArticles() {
  return function(dispatch) {
    dispatch({
      type: 'FETCH_ARTICLES',
    });
    fetch(`${API}articles`)
      .then(response => {
        if (!response.ok) {
          debugger
          throw Error(response.statusText);
        }
        return response;
      })
      .then((response) => response.json())
      .then(json => {
        dispatch(FetchArticlesSuccess(json));
      })
      .catch(error => {
        dispatch(FetchArticlesError(error));
      });
  }
}

export function FetchArticlesSuccess(articles) {
  console.log("ok");
  return {
    type: 'FETCH_ARTICLES_SUCCESS',
    articles
  };
}

export function FetchArticlesError(error) {
  console.log(error)
  return {
    type: 'FETCH_ARTICLES_FAILURE',
    error
  };
}
