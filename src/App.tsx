import React, { useEffect, useContext } from "react";
import { BrowserRouter } from "react-router-dom";
import { Loader } from "components/Loader";
import { DarkMode } from "sancho";
import { isLoggedIn, getUserName } from "@/api/auth";
import { BaseRoutes } from "@/routes/BaseRoutes";
import { AppContext } from "./AppContext";

export const App: React.FC<{}> = () => {
  const [{ loader }, dispatch] = useContext(AppContext);
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
        {loader ? (
          <Loader />
        ) : (
          <BrowserRouter>
            <BaseRoutes />
          </BrowserRouter>
        )}
      </DarkMode>
    </div>
  );
};