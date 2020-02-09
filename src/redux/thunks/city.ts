import { CHANGE_CITY } from "../actions/actionTypes";

export const changeCity = city => async dispatch => {
  dispatch({ type: CHANGE_CITY, payload: city });
};
