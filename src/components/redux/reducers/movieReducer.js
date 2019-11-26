import { LOAD_MOVIES, SEARCH_MOVIE } from "../constants/actionsTypes";

const initialState = {
  data: [],
  searchData: ""
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_MOVIES:
      return {
        ...state,
        data: action.payload
      };
    case SEARCH_MOVIE:
      return {
        ...state,
        searchData: action.payload
      };
    default:
      return state;
  }
};

export default movieReducer;
