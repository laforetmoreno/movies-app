import api from "../../services/api";
import { LOAD_REQUEST, LOAD_SUCCESS, LOAD_ERROR } from "../actions/actionTypes";

export const getData = (city = 1) => async dispatch => {
  dispatch({ type: LOAD_REQUEST });

  try {
    const { data } = await api(`/v0/templates/highlights/${city}/partnership/home`);

    dispatch({ type: LOAD_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: LOAD_ERROR });
  }
};
