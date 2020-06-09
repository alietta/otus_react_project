import React, { useEffect, useContext } from "react";
import { BrowserRouter } from "react-router-dom";
import { Loader } from "components/Loader";
import { DarkMode } from "sancho";
import { BaseRoutes } from "@/routes/BaseRoutes";

export const App: React.FC<{}> = () => {
  const loader = false;
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
