import { LOAD_MOVIES, DATA_LOADED } from "../constants/actionsTypes";

const initialState = {
  data: []
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_MOVIES:
      return {
        ...state,
        data: action.payload
      };
    case DATA_LOADED:
      return {
        ...state,
        data: action.payload
      };
    default:
      return state;
  }
};

export default movieReducer;
