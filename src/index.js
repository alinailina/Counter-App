import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import { createStore } from "redux";
import rootReducer from "./reducers";
import { Provider } from "react-redux";

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

/* 
Action -
describes an action,
is a function that returns an object:

const increment = () => {
  return {
    type: "INCREMENT",
  };
};

const decrement = () => {
  return {
    type: "DECREMENT",
  };
};
*/

/* 
Reducer -
describes how actions transform state:

const counter = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
  }
};
*/

/* 
Store - 
holds all application level state, 
takes reducer as an argument:

import { createStore } from "redux";
const store = createStore(reducer);

Display in console
store.subscribe(() => console.log(store.getState()));
*/

/* 
Dispatch -
executes an action:

store.dispatch(increment());
store.dispatch(decrement());
*/
