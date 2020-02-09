import { LOAD_REQUEST, LOAD_SUCCESS, LOAD_ERROR } from "../actions/actionTypes";

import { Actions } from "../../types";

const INITIAL_STATE = {
  data: [],
  error: false,
  loading: false
};

function movies(state = INITIAL_STATE, action: Actions) {
  switch (action.type) {
    case LOAD_REQUEST:
      return {
        ...state,
        data: [],
        loading: true,
        error: false
      };
    case LOAD_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: false
      };
    case LOAD_ERROR:
      return {
        ...state,
        data: [],
        loading: false,
        error: true
      };
    default:
      return state;
  }
}

export default movies;
