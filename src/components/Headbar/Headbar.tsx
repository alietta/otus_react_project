import React, { FC } from "react";
import { useTheme, Container, Text, IconLogOut } from "sancho";

interface HeadbarProps {
  onLogout: () => void;
}

const Headbar: FC<HeadbarProps> = (props: HeadbarProps) => {
  const { onLogout } = props;
  const theme = useTheme();
  const name = 'change name'

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
