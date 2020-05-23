import React, { FC, useContext } from "react";
import { useTheme, Container, Text, IconLogOut } from "sancho";
import { AppContext } from "@/AppContext";

interface HeadbarProps {
  onLogout: () => void;
}

const Headbar: FC<HeadbarProps> = (props: HeadbarProps) => {
  const { onLogout } = props;
  const theme = useTheme();
  const [{ name }] = useContext(AppContext);

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
