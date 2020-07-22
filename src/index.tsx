import React from "react";
import { render } from "react-dom";
import { App } from "@/modules/App";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./rdx/store";
import { CacheProvider } from "@emotion/core";
import createCache from "@emotion/cache";

const myCache = createCache();
myCache.compat = true;

render(
  <Provider store={store}>
    <CacheProvider value={myCache}>
      <App />
    </CacheProvider>
  </Provider>,
  document.getElementById("app")
);
