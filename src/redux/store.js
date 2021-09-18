import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducers from "./reducers";

const enchancer =
  global.window &&
  global.window.__REDUX_DEVTOOLS_EXTENSION__ &&
  global.window.__REDUX_DEVTOOLS_EXTENSION__();

const configureStore = (preloadedState = {}) => {
  return createStore(rootReducers, applyMiddleware(thunk), enchancer);
};

export default configureStore;
