import React, { FC } from "react";
import { useTheme, Container, Text, IconLogOut } from "sancho";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "@/modules/login/duck/reducer";

const Headbar: FC = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const name = useSelector((state: any) => state.user.name);
  const onLogout = () => {
    dispatch(actions.logout());
  };

  return (
    <div
      css={{
        height: 50,
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        background: theme.colors.background.tint1,
      }}
    >
      <Container
        css={{
          minWidth: 1024,
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <Text css={{ marginRight: 10 }}>{name}</Text>
        <div
          onClick={onLogout}
          css={{ "&:hover": { cursor: "pointer" } }}
          className="logout-icon"
        >
          <IconLogOut />
        </div>
      </Container>
    </div>
  );
};
export { Headbar };
