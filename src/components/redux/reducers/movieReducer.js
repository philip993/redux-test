import {
  LOAD_MOVIES,
  SEARCH_MOVIE,
  SEARCH_QUERY_EXAMPLE,
  SEARCH_QUERY,
  SEARCHED_TERM,
  FAILED_QUERY
} from "../constants/actionsTypes";

const initialState = {
  data: [],
  searchData: "",
  errorMsg: ""
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
    case FAILED_QUERY:
      return {
        ...state,
        errorMsg: action.payload
      };
    default:
      return state;
  }
};

export default movieReducer;
