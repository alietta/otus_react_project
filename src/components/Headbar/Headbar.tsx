import React, { FC } from "react";
import { useTheme, Container, Text, Button, IconLogOut } from "sancho"

interface HeadbarProps {
  name: string;
  isAuth: boolean;
}

const Headbar: FC<HeadbarProps> = (props: HeadbarProps) => {
  const { name } = props;
  const theme = useTheme();
  console.warn(theme);
  return(
    <div css={{height: 50, display: 'flex', justifyContent: 'flex-end',     alignItems: "center", background: theme.colors.background.tint1}}>
      <Container css={{minWidth: 1024, display: 'flex', justifyContent: 'flex-end',     alignItems: "center"}}>
        <Text css={{marginRight: 10}}>{name}</Text>
        <Button><IconLogOut/></Button>
      </Container>
    </div>
  )
}
export {Headbar};
