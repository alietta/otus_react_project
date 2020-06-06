import React from "react";
import { render } from "react-dom";
import { App } from "@/App";
import "./index.css";
import { AppContextProvider } from "./AppContext";
import { Provider } from "react-redux";
import { store } from "./rdx/store";

render(
  <Provider store={store}>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </Provider>,
  document.getElementById("app")
);
