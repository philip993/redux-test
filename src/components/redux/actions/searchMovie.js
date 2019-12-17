import {
  SEARCH_MOVIE,
  SEARCH_QUERY,
  SEARCHED_TERM
} from "../constants/actionsTypes";

export const searchMovie = text => {
  return {
    type: SEARCH_MOVIE,
    payload: text
  };
};

export const searchedTerm = text => {
  return {
    type: SEARCHED_TERM,
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
      });
  };
};
