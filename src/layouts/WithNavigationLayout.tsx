import React, { useContext } from "react";
import { Container, useTheme } from "sancho";
import { Headbar } from "components/Headbar";

export const WithNavigationLayout: React.FC = (props) => {
  const theme = useTheme();
  const onLogout = () => {
    console.log('logout')
  };
  return (
    <div
      css={{
        width: "100vw",
        height: "100vh",
        background: theme.colors.background.default,
      }}
    >
      <Headbar onLogout={onLogout} />
      <Container css={{ maxWidth: 1024, paddingTop: 50 }}>
        {props.children}
      </Container>
    </div>
  );
};
