import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { LoginPage } from "@/pages/LoginPage";
import { GamePage } from "@/pages/GamePage";
import { DarkMode } from "sancho";
import { isLoggedIn } from "@/api/auth";

export const App: React.FC<{}> = () => {
  const [store, setStore] = useState({ name: "", isAuth: true });
  useEffect(() => {
    (async () => {
      const isAuth = await isLoggedIn();
      debugger;
      setStore({ ...store, isAuth });
    })();
  }, []);
  return (
    <div>
      <DarkMode>
        <Router>
          {store.isAuth ? (
            <Switch>
              <Route path="/" exact>
                <GamePage store={store} />
              </Route>
              <Route path="*">
                <Redirect to={{ pathname: "/" }} />
              </Route>
            </Switch>
          ) : (
            <Switch>
              <Route path="/login">
                <LoginPage setStore={setStore} />
              </Route>
              <Route path="*">
                <Redirect to={{ pathname: "/login" }} />
              </Route>
            </Switch>
          )}
        </Router>
      </DarkMode>
    </div>
  );
};
