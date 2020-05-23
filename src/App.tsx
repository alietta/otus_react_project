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
import { getUserName } from "@/api/user";
import {AppContextProvider} from './AppContext';

export const App: React.FC<{}> = () => {
  const [store, setStore] = useState({ name: "", isAuth: false });
  useEffect(() => {
    const isAuth = isLoggedIn();
    const name = getUserName();
    setStore({ name, isAuth });
  }, []);
  return (
    <AppContextProvider>
      <DarkMode>
        <Router>
          {store.isAuth ? (
            <Switch>
              <Route path="/" exact>
                <GamePage store={store} setStore={setStore} />
              </Route>
              <Route path="*">
                <Redirect to={{ pathname: "/" }} />
              </Route>
            </Switch>
          ) : (
            <Switch>
              <Route path="/login" exact>
                <LoginPage setStore={setStore} />
              </Route>
              <Route path="*">
                <Redirect to={{ pathname: "/login" }} />
              </Route>
            </Switch>
          )}
        </Router>
      </DarkMode>
    </AppContextProvider>
  );
};
