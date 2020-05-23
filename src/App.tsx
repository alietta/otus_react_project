import React, { useEffect, useContext } from "react";
import { BrowserRouter } from "react-router-dom";
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
import { BaseRoutes } from "@/routes/BaseRoutes";
import { AppContext } from "./AppContext";

export const App: React.FC<{}> = () => {
  const [{ loader }, dispatch] = useContext(AppContext);
  useEffect(() => {
    console.warn('RENDER');
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
        {loader ? (
          <div>loading</div>
        ) : (
          <BrowserRouter>
            <BaseRoutes />
           </BrowserRouter>
        )}
      </DarkMode>
    </div>
  );
};
