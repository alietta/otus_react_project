import React from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { LoginPage } from "@/pages/LoginPage";
import { GamePage } from "@/pages/GamePage";
import { Lesson17Page } from "@/pages/Lesson17Page";
import { Lesson22Page } from "@/pages/Lesson22Page";
import { PrivateRoute } from "./PrivateRoute";

const Routes: React.FC<{ isAuth: boolean }> = ({
  isAuth,
}: {
  isAuth: boolean;
}) => {
  return (
    <Switch>
      <PrivateRoute isAuth={isAuth} path="/" exact>
        <GamePage />
      </PrivateRoute>
      <PrivateRoute isAuth={isAuth} path="/lesson17" exact>
        <Lesson17Page />
      </PrivateRoute>
      <PrivateRoute isAuth={isAuth} path="/lesson22" exact>
        <Lesson22Page />
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
