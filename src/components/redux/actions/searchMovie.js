import {
  SEARCH_MOVIE,
  SEARCH_QUERY,
<<<<<<< HEAD
  FAILED_QUERY
=======
  SEARCHED_TERM
>>>>>>> 34e9cb0e12544613cb1edb7b1ffabd77b4d4448c
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
      })
      .catch(err => {
        dispatch({
          type: FAILED_QUERY,
          payload: err
        });
      });
  };
};
