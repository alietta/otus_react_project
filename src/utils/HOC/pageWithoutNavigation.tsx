import React from "react";
import { DarkMode, Container, useTheme } from "sancho";
import { pageStyle } from "./pageStyle";

export const pageWithoutNavigation = <Props extends object>(
  Component: React.ComponentType<Props>
) => (props: Props) => {
  const theme = useTheme();
  return (
    <div css={{ width: "100vw", height: "100vh", background: theme.colors.background.default}}>
      <Container css={{ maxWidth: 1024, height: '100%' }}>
        <Component {...props} />
      </Container>
    </div>
  );
};
