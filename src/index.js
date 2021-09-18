import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import configureStore from "./redux/store";

const initialState = global.window && global.window.__INITIAL_STATE__;
const store = configureStore(initialState);

ReactDOM.hydrate(<App store={store} />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
