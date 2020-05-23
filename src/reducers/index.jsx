import counterReducer from "./Counter";
import isLoggedReducer from "./isLogged";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  counter: counterReducer,
  isLogged: isLoggedReducer,
});

export default rootReducer;