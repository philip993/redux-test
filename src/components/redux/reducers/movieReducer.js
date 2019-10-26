import { LOAD_MOVIES, DATA_LOADED } from "../constants/actionsTypes";

const initialState = {
  movies: []
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_MOVIES:
      return {
        ...state,
        movies: action.payload
      };
    case DATA_LOADED:
      return {
        ...state,
        movies: action.payload
      };
    default:
      return state;
  }
};

export default movieReducer;
