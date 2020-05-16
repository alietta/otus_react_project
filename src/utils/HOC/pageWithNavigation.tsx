import React from "react";
import { DarkMode, Container, useTheme } from "sancho";
import { pageStyle } from "./pageStyle";
import { Headbar } from 'components/Headbar';

export const pageWithNavigation = <Props extends object>(
  Component: React.ComponentType<Props>
) => (props: Props) => {
  const theme = useTheme();
  return (
    <div
      css={{
        width: "100vw",
        height: "100vh",
        background: theme.colors.background.default,
      }}
    >
      <Headbar name="sdfdf" isAuth={true} />
      <Container css={{ maxWidth: 1024, paddingTop: 50 }}>
        <Component {...props} />
      </Container>
    </div>
  );
};
