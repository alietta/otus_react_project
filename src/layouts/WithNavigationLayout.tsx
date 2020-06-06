import React, { useContext } from "react";
import { Container, useTheme } from "sancho";
import { Headbar } from "components/Headbar";
import { logout } from "@/api/auth";
import { AppContext } from "@/AppContext";

export const WithNavigationLayout: React.FC = (props) => {
  const theme = useTheme();
  const [, dispatch] = useContext(AppContext);
  const onLogout = async () => {
    await logout();
    dispatch({ type: "LOGOUT" });
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
