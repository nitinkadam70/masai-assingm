import {
  legacy_createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from 'redux';
import { reducer as AppReducer } from './AppReducer/reducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({ AppReducer });
//Redux Dev Tool
const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//Enhancer
const enhancer = composeEnhancers(applyMiddleware(thunk));

const store = legacy_createStore(rootReducer, enhancer);

export { store };

// NOTE: Do not remove this code,its used for calculating your score, if removed it will give you zero marks
if (window.Cypress) {
  window.store = store;
}
