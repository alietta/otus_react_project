import React from "react";
import { render } from "react-dom";
import { App } from "@/features/App";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./rdx/store";

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
