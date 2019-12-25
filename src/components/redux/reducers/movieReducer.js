import {
  LOAD_MOVIES,
  SEARCH_MOVIE,
  SEARCH_QUERY_EXAMPLE,
  SEARCH_QUERY,
  SEARCHED_TERM
} from "../constants/actionsTypes";

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
    case SEARCH_QUERY:
      return {
        ...state,
        data: action.payload
      };
    default:
      return state;
  }
};

export default movieReducer;
