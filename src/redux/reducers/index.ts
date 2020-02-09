import { combineReducers } from 'redux';
import movies from './movies';
import city from './city';

export const reducers = combineReducers({
  movies,
  city,
});
