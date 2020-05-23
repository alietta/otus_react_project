import React, { useContext } from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { LoginPage } from "@/pages/LoginPage";
import { GamePage } from "@/pages/GamePage";
import { PrivateRoute } from "./PrivateRoute";
import { AppContext } from "@/AppContext";

const Routes: React.FC<{}> = () => {
  const [{ isAuth }] = useContext(AppContext);
  return (
    <Switch>
      <PrivateRoute isAuth={isAuth} path="/" exact>
        <GamePage />
      </PrivateRoute>
      <Route path="/login" exact>
        <LoginPage />
      </Route>
      <Route path="*">
        <Redirect to={{ pathname: "/" }} />
      </Route>
    </Switch>
  );
};
export const BaseRoutes = withRouter(Routes);
