import { Dispatch } from 'redux';

import { getAllMovies } from '../../services/movies';

import { LOAD_REQUEST, LOAD_SUCCESS, LOAD_ERROR } from '../actions/actionTypes';

export const getData = (city: number) => async (dispatch: Dispatch) => {
  dispatch({ type: LOAD_REQUEST });

  try {
    const response = await getAllMovies(city);

    dispatch({ type: LOAD_SUCCESS, payload: response.data.map(x => x.event) });
  } catch (error) {
    dispatch({ type: LOAD_ERROR });
  }
};
