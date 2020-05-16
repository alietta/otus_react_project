import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { LoginPage } from "@/pages/LoginPage"

export const App: React.FC<{}> = () => <LoginPage/>;
