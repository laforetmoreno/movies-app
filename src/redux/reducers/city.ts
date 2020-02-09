import { Reducer } from "redux";

import { CHANGE_CITY } from "../actions/actionTypes";

import { Actions, CitiesState } from "../../types";

const INITIAL_STATE: CitiesState = {
  data: {
    name: "rio-de-janeiro",
    value: 1,
    label: "Rio de Janeiro"
  }
};

const city: Reducer<CitiesState> = (state = INITIAL_STATE, action: Actions) => {
  switch (action.type) {
    case CHANGE_CITY:
      return {
        ...state,
        data: action.payload
      };
    default:
      return state;
  }
};

export default city;
