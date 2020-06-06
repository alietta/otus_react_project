import React from "react";
import { render } from "react-dom";
import { App } from "@/App";
import "./index.css";
import { AppContextProvider } from "./AppContext";

render(
  <AppContextProvider>
    <App />
  </AppContextProvider>,
  document.getElementById("app")
);
