import React, {
  FC,
} from "react";
import {
  useTheme,
  Container,
} from "sancho";
import { EnterForm } from "components/EnterForm";
import { login } from "@/api/auth";

const LoginPage: FC = () => {
  const theme = useTheme();
  const onSubmit = (): void => {
    login();
  }
  return (
    <Container>
      <EnterForm onSubmit={onSubmit}/>
    </Container>
  );
};

export { LoginPage };
