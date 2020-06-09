import React, { useContext } from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { LoginPage } from "@/pages/LoginPage";
import { GamePage } from "@/pages/GamePage";
import { Lesson17Page } from "@/pages/Lesson17Page";
import { PrivateRoute } from "./PrivateRoute";

const Routes: React.FC<{}> = () => {
  const isAuth = true;
  return (
    <Switch>
      <PrivateRoute isAuth={isAuth} path="/" exact>
        <GamePage />
      </PrivateRoute>
      <PrivateRoute isAuth={isAuth} path="/lesson17" exact>
        <Lesson17Page />
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
