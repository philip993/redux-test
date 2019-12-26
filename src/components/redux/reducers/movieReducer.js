import {
  LOAD_MOVIES,
  SEARCH_MOVIE,
  SEARCH_QUERY_EXAMPLE,
  SEARCH_QUERY,
<<<<<<< HEAD
  SEARCHED_TERM,
  FAILED_QUERY
=======
  SEARCHED_TERM
>>>>>>> 34e9cb0e12544613cb1edb7b1ffabd77b4d4448c
} from "../constants/actionsTypes";

const initialState = {
  data: [],
  searchData: "",
<<<<<<< HEAD
  errorMsg: ""
=======
  newData: [],
  capturedTerm: ""
>>>>>>> 34e9cb0e12544613cb1edb7b1ffabd77b4d4448c
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
<<<<<<< HEAD
        data: action.payload
      };
    case FAILED_QUERY:
      return {
        ...state,
        errorMsg: action.payload
=======
        newData: action.payload
      };
    case SEARCHED_TERM:
      return {
        ...state,
        capturedTerm: action.payload
>>>>>>> 34e9cb0e12544613cb1edb7b1ffabd77b4d4448c
      };
    default:
      return state;
  }
};

export default movieReducer;
