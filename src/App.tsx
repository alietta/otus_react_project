import React, { useState, useEffect, useContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { LoginPage } from "@/pages/LoginPage";
import { GamePage } from "@/pages/GamePage";
import { DarkMode } from "sancho";
import { isLoggedIn, getUserName } from "@/api/auth";
import { AppContext } from "./AppContext";

export const App: React.FC<{}> = () => {
  const [{ isAuth }, dispatch] = useContext(AppContext);
  useEffect(() => {
    (async () => {
      dispatch({ type: "LOADER_SHOW" });
      const isLogged = await isLoggedIn();
      const name = getUserName();
      if (isLogged) {
        dispatch({ type: "LOGIN", payload: name });
      } else {
        dispatch({ type: "LOGOUT" });
      }
      dispatch({ type: "LOADER_HIDE" });
    })();
  }, []);
  return (
    <div>
      <DarkMode>
        <Router>
          {isAuth ? (
            <Switch>
              <Route path="/" exact>
                <GamePage />
              </Route>
              <Route path="*">
                <Redirect to={{ pathname: "/" }} />
              </Route>
            </Switch>
          ) : (
            <Switch>
              <Route path="/login" exact>
                <LoginPage />
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
