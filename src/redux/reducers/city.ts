import { CHANGE_CITY } from "../actions/actionTypes";

import { Actions } from "../../types";

const INITIAL_STATE = {
  data: {
    name: "rio-de-janeiro",
    value: 1,
    label: "Rio de Janeiro"
  }
};

function city(state = INITIAL_STATE, action: Actions) {
  switch (action.type) {
    case CHANGE_CITY:
      return {
        ...state,
        data: action.payload
      };
    default:
      return state;
  }
}

export default city;
