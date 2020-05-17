import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { LoginPage } from "@/pages/LoginPage";
import { GamePage } from "@/pages/GamePage";
import { DarkMode } from "sancho";

export const App: React.FC<{}> = () => {
  return (
    <div>
      <DarkMode>
        <Router>
          <Switch>
            <Route path="/login">
              <LoginPage />
            </Route>
            <Route path="/">
              <GamePage />
            </Route>
          </Switch>
        </Router>
      </DarkMode>
    </div>
  );
};
