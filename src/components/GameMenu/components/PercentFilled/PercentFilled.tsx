import React, { FunctionComponent, useState } from "react";
import { jsx, tsx } from "@emotion/core";
import { useTheme, Layer, InputGroup, Input, Button } from "sancho";

interface PercentFilled {
  onSubmit: (values?: { percent: number }) => void;
}
const defaultProps: EnterFormProps = {
  onSubmit: (): void => {
    console.log("form submit");
  },
};

const PercentFilled: FunctionComponent<EnterFormProps> = (
  props = defaultProps
) => {
  const theme = useTheme();
  const [percent, setPercent] = useState<number | string>(0);

  const changePercent = (e): void => {
    if (e.target.value !== "") {
      const percent = Math.abs(parseInt(e.target.value, 10));
      setPercent(percent <= 100 ? percent : 100);
    } else {
      setPercent(e.target.value);
    }
  };

  const onSubmitForm = (e): void => {
    e.preventDefault();
    const newPercent = percent === "" ? 0 : percent;
    props.onSubmit(newPercent);
  };

  return (
    <Layer elevation="xs" css={{ borderRadius: 0, boxShadow: "none" }}>
      <form
        onSubmit={onSubmitForm}
        css={{ display: "flex", alignItems: "flex-end" }}
      >
        <InputGroup label="Filled percent">
          <Input
            inputSize="lg"
            type="number"
            placeholder="0"
            value={percent}
            onChange={changePercent}
          />
        </InputGroup>
        <Button
          style={{
            marginTop: theme.spaces.lg,
            marginLeft: 10,
          }}
          size="lg"
          type="submit"
          intent="primary"
        >
          Set
        </Button>
      </form>
    </Layer>
  );
};

PercentFilled.defaultProps = defaultProps;
export { PercentFilled };
