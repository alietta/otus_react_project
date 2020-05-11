import React, { FunctionComponent, MouseEvent, useState } from "react";
import { useTheme, Layer, InputGroup, Input, Button } from "sancho";

interface PercentFilled {
  onSubmit: (values?: { percent: number }) => void;
}

const PercentFilled: FunctionComponent<PercentFilled> = ({
  onSubmit = (): void => console.log("form submit"),
}: PercentFilled) => {
  const theme = useTheme();
  const [percent, setPercent] = useState<number | string>(props.startPercent);

  const changePercent = (e): void => {
    if (e.target.value !== "") {
      const percent = Math.abs(parseInt(e.target.value, 10));
      setPercent(percent <= 100 ? percent : 100);
    } else {
      setPercent(e.target.value);
    }
  };

  const onSubmitForm = (e: MouseEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const newPercent: number = percent === "" ? 0 : percent;
    onSubmit(newPercent);
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

export { PercentFilled };
