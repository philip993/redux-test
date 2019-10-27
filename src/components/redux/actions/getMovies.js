import { LOAD_MOVIES } from "../constants/actionsTypes";

export const getMovies = () => {
  return dispatch => {
    return fetch(`http://www.omdbapi.com/?apikey=5381508e&s=2018`)
      .then(response => response.json())
      .then(json => {
        dispatch({
          type: LOAD_MOVIES,
          payload: json.Search
        });
      });
  };
};
