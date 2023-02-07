import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";

import { RootReducer } from "./RootReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const configureStore = (initialState = {}) => {
  const enhancer = compose(composeEnhancers( applyMiddleware(thunkMiddleware)));

  return createStore(RootReducer, initialState, enhancer);
};
