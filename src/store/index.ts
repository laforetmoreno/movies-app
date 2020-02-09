import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { reducers } from '../redux/reducers';

const composeEnhancers = composeWithDevTools({ trace: true, traceLimit: 25 });
export const store = createStore(reducers, {}, composeEnhancers(applyMiddleware(thunk)));
