import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { LoginPage } from "@/pages/LoginPage";
import { DarkMode } from "sancho"

export const App: React.FC<{}> = () => {
  return(
    <div>
      <DarkMode>
        <LoginPage />
      </DarkMode>
    </div>
  )
}
