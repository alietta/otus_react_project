import React, {
  FunctionComponent,
  ChangeEvent,
  MouseEvent,
  useState,
} from "react";
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
  onSubmit: (values?: { name: string }) => void;
}
const defaultProps: EnterFormProps = {
  onSubmit: (): void => {
    console.log("form submit");
  },
};

const EnterForm: FunctionComponent<EnterFormProps> = (props = defaultProps) => {
  const theme = useTheme();
  const [nameValue, setName] = useState<string>("");
  const changeName = (e: ChangeEvent<HTMLInputElement>): void => {
    setName(e.target.value);
  };
  const onSubmitForm = (e: MouseEvent<HTMLFormElement>): void => {
    e.preventDefault();
    props.onSubmit({ name: nameValue });
  };

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
      <form style={{ padding: theme.spaces.lg }} onSubmit={onSubmitForm}>
        <InputGroup hideLabel label="Name">
          <Input
            inputSize="lg"
            type="text"
            placeholder="Name"
            value={nameValue}
            onChange={changeName}
          />
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

EnterForm.defaultProps = defaultProps;
export { EnterForm };
