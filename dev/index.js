require("./sass/styles");
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { configureStore } from "./configureStore";
import MainContainer from "Containers/MainContainer";
var registerObserver = require('react-perf-devtool');
registerObserver()

const store = configureStore();

const wrap = (
  <Provider store={store}>
    <MainContainer />
  </Provider>
);

ReactDOM.render(wrap, document.querySelector("#app"));
