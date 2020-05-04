import React, { FunctionComponent, useState } from "react";
import { jsx, tsx } from "@emotion/core";
import {
  useTheme,
  Layer,
  Toolbar,
  Text,
  InputGroup,
  Input,
  Button,
} from "sancho";

interface EnterFormProps {
  onSubmit: object,
}

const EnterForm: FunctionComponent<EnterFormProps> = (props) => {
  const theme = useTheme();

  return (
    <Layer css={{ textAlign: "center" }}>
      <Toolbar
        css={{
          justifyContent: "center",
          borderBottom: `1px solid ${theme.colors.border.default}`,
          padding: theme.spaces.md,
        }}
      >
        <Text gutter={false} variant="h4">
          Sign in to Life Game
        </Text>
      </Toolbar>
      <form style={{ padding: theme.spaces.lg }}>
        <InputGroup hideLabel label="Name">
          <Input inputSize="lg" type="text" placeholder="Name" />
        </InputGroup>
        <Button
          style={{
            marginTop: theme.spaces.lg,
          }}
          size="lg"
          type="submit"
          intent="primary"
        >
          Sign in
        </Button>
      </form>
    </Layer>
  );
};

export { EnterForm };
