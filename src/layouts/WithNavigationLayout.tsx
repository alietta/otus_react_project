import React from "react";
import { Container, useTheme } from "sancho";
import { Headbar } from "@/modules/Headbar";

export const WithNavigationLayout: React.FC = (props) => {
  const theme = useTheme();
  return (
    <div
      css={{
        width: "100vw",
        height: "100%",
        background: theme.colors.background.default,
      }}
    >
      <Headbar />
      <Container css={{ maxWidth: 1024, paddingTop: 50 }}>
        {props.children}
      </Container>
    </div>
  );
};
