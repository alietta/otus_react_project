import React, { useEffect, useContext } from "react";
import { BrowserRouter } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Loader } from "components/Loader";
import { DarkMode } from "sancho";
import { BaseRoutes } from "@/routes/BaseRoutes";

export const App: React.FC<{}> = () => {
  const status = useSelector((state: any) => state.app.status);
  const isAuth = useSelector((state: any) => state.user.isAuth);

  return (
    <div>
      <DarkMode>
        {status === "loading" ? (
          <Loader />
        ) : (
          <BrowserRouter>
            <BaseRoutes isAuth={isAuth} />
          </BrowserRouter>
        )}
      </DarkMode>
    </div>
  );
};
