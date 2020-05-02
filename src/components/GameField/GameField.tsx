import React, { FunctionComponent, useState } from "react";
import { Field, Row } from "./GameFieldItems";
import { Cell } from "./components";

interface GameFildProps {
  field: string[][];
}

const GameField: FunctionComponent<GameFildProps> = (props) => {
  const [field, setField] = useState<Array<boolean>>(props.field);
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
    <Field>
      {field.map((arr, index) => {
        return (
          <Row key={`row-${index}`}>
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
          </Row>
        );
      })}
    </Field>
  );
};

export { GameField };
