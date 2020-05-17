import React from "react";
import { Redirect } from "react-router-dom";
import { DarkMode, Container, useTheme } from "sancho";
import { pageStyle } from "./pageStyle";
import { Headbar } from "components/Headbar";
import { logout } from "@/api/auth";

export const pageWithNavigation = <Props extends object>(
  Component: React.ComponentType<Props>
) => (props: Props) => {
  const theme = useTheme();
  console.warn(props)
  const onLogout = () => {
    (async () => {
      await logout();
      debugger
      props.setStore({name: '', isAuth: false})
    })();
  };
  return (
    <div
      css={{
        width: "100vw",
        height: "100vh",
        background: theme.colors.background.default,
      }}
    >
      <Headbar name={props.store.name} onLogout={onLogout} />
      <Container css={{ maxWidth: 1024, paddingTop: 50 }}>
        <Component {...props} />
      </Container>
      {/* {needRedirect && <Redirect to={{ pathname: "/login" }} />} */}
    </div>
  );
};
