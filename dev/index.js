import React from "react";
import ReactDOM from "react-dom";
require("./sass/styles");
import { Provider } from "react-redux";
import { configureStore } from "./configureStore";
import MainContainer from "Containers/MainContainer";

const store = configureStore();

const wrap = (
	<Provider store={store}>
		<MainContainer />
	</Provider>
);

ReactDOM.render(wrap, document.querySelector("#app"));
