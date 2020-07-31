import React from "react";
import { Container, useTheme } from "sancho";

export const WithoutNavigationLayout: React.FC = (props) => {
  const theme = useTheme();
  return (
    <div
      css={{
        width: "100vw",
        height: "100%",
        background: theme.colors.background.default,
      }}
    >
      <Container css={{ maxWidth: 1024, height: "100%" }}>
        {props.children}
      </Container>
    </div>
  );
};
