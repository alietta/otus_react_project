import React, { FC } from "react";
import { useTheme, Container, Text, Button, IconLogOut } from "sancho";

interface HeadbarProps {
  name: string;
  onLogout: () => void;
}

const Headbar: FC<HeadbarProps> = (props: HeadbarProps) => {
  const { name, onLogout } = props;
  const theme = useTheme();
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
        <div onClick={onLogout}>
          <IconLogOut />
        </div>
      </Container>
    </div>
  );
};
export { Headbar };
