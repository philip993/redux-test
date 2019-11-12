import { SEARCH_MOVIE } from "../constants/actionsTypes";

export const searchMovie = text => {
  return {
    type: SEARCH_MOVIE,
    payload: text
  };
};
