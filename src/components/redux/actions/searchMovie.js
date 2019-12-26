import {
  SEARCH_MOVIE,
  SEARCH_QUERY,
  FAILED_QUERY
} from "../constants/actionsTypes";

export const searchMovie = text => {
  return {
    type: SEARCH_MOVIE,
    payload: text
  };
};

export const searchQuery = text => {
  return dispatch => {
    return fetch(`http://www.omdbapi.com/?s=${text}&apikey=5381508e`)
      .then(res => res.json())
      .then(jsonResponse => {
        dispatch({
          type: SEARCH_QUERY,
          payload: jsonResponse.Search
        });
      })
      .catch(err => {
        dispatch({
          type: FAILED_QUERY,
          payload: err
        });
      });
  };
};
