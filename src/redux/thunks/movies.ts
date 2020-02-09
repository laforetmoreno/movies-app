import { Dispatch } from "redux";

import api from "../../services/api";
import { LOAD_REQUEST, LOAD_SUCCESS, LOAD_ERROR } from "../actions/actionTypes";

export const getData = (city: string) => async (dispatch: Dispatch) => {
  dispatch({ type: LOAD_REQUEST });

  try {
    const { data } = await api(`/v0/templates/highlights/${city}/partnership/home`);

    dispatch({ type: LOAD_SUCCESS, payload: data.map(x => x.event) });
  } catch (error) {
    dispatch({ type: LOAD_ERROR });
  }
};
