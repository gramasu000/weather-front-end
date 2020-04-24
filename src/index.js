import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import mainReducer from "./reducers.js"; 
import ConnectedApp from "./App.js";

const store = createStore(mainReducer);
const rootElement = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <ConnectedApp />
  </Provider>,
  rootElement
);
