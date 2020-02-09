import { Dispatch } from "redux";

import { CHANGE_CITY } from "../actions/actionTypes";

export const changeCity = city => (dispatch: Dispatch) => {
  dispatch({ type: CHANGE_CITY, payload: city });
};
