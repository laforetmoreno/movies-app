import api from "../../services/api";
import { LOAD_REQUEST, LOAD_SUCCESS, LOAD_ERROR } from "../actions/actionTypes";

export const getData = () => async dispatch => {
  dispatch({ type: LOAD_REQUEST });

  try {
    const { data } = await api("/v0/templates/highlights/1/partnership/home");
    dispatch({ type: LOAD_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: LOAD_ERROR });
  }
};
