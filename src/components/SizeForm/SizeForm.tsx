import React, {
  FunctionComponent,
  ChangeEvent,
  useState,
  useEffect,
} from "react";
import { useTheme, InputGroup, Container } from "sancho";

export interface SizeFormProps {
  minWidth: number;
  maxWidth: number;
  minHeight: number;
  maxHeight: number;
  passSize: (values?: { width: number; height: number }) => void;
  label: string;
  default?: { width: number; height: number };
}

const SizeForm: FunctionComponent<SizeFormProps> = ({
  minWidth = 3,
  maxWidth = 10,
  minHeight = 3,
  maxHeight = 10,
  label = "",
  passSize = (): void => {
    console.log("pass size");
  },
}: SizeFormProps) => {
  /* const { minWidth, maxWidth, minHeight, maxHeight, passSize } = props; */
  const theme = useTheme();
  const [size, setSize] = useState<{ width: number; height: number }>({
    width: minWidth,
    height: minHeight,
  });
  const changeSize = (e: ChangeEvent<HTMLInputElement>): void => {
    const newState = { ...size, [e.target.name]: parseInt(e.target.value, 10) };
    setSize(newState);
  };
  useEffect(() => {
    passSize(size);
  }, [size]);

  return (
    <Container
      css={{ background: theme.colors.background.layer, padding: 0, margin: 0 }}
    >
      <form>
        <InputGroup
          label={`${label} width`}
          css={{ flexDirection: "column", display: "flex" }}
        >
          <input
            value={size.width}
            onChange={changeSize}
            type="range"
            min={minWidth}
            max={maxWidth}
            name="width"
            step="5"
          />
        </InputGroup>
        <InputGroup
          label={`${label} height`}
          css={{ flexDirection: "column", display: "flex" }}
        >
          <input
            value={size.height}
            onChange={changeSize}
            type="range"
            min={minHeight}
            max={maxHeight}
            step="5"
            name="height"
          />
        </InputGroup>
      </form>
    </Container>
  );
};

export { SizeForm };
