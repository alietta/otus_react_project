import React, { FunctionComponent } from "react";
import { useTheme } from "sancho";
import { Field } from "./GameFieldItems";
import { Cell } from "./components";

interface GameFildProps {
  field: boolean[][];
  setField: (field: boolean[][]) => void;
}

const GameField: FunctionComponent<GameFildProps> = (props: GameFildProps) => {
  const theme = useTheme();
  const { field, setField } = props;
  const onClick = (x: number, y: number, isFilled? = false): void => {
    const isXValid = x >= 0 && x < field[0].length;
    const isYValid = y >= 0 && y < field.length;
    const areCoordinatesValid = isXValid && isYValid;
    if (!areCoordinatesValid) {
      return;
    }

    const fieldStateCopy = field.map((row) => [...row]);
    fieldStateCopy[y][x] = isFilled;
    setField(fieldStateCopy);
  };

  return (
    <Field
      css={{
        borderColor: theme.colors.border.default,
      }}
    >
      {field.map((arr, index) => {
        return (
          <div key={`row-${index}`} css={{ display: "flex" }}>
            {arr.map((isFilled, ind) => {
              return (
                <Cell
                  key={`y-${index}_x-${ind}`}
                  isFilled={isFilled}
                  x={ind}
                  y={index}
                  onClick={onClick}
                />
              );
            })}
          </div>
        );
      })}
    </Field>
  );
};

export { GameField };
