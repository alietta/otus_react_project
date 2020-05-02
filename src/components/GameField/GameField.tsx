import React, { FunctionComponent, useState, useEffect } from "react";
import { Field, Row } from "./GameFieldItems";
import { Cell } from "./components";

interface GameFildProps {
  field: boolean[][];
}

const GameField: FunctionComponent<GameFildProps> = (props) => {
  const [field, setField] = useState<Array>(props.field);
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

  const updatePositions = () => {
    const fieldStateCopy = field.map((row, y) => {
      const filled = row.reduce((acc, elem, index) => {
        if (elem) {
          const nextIndex = index + 1 < row.length ? index + 1 : 0;
          acc = [...acc, nextIndex];
        }
        return acc;
      }, []);
      return row.map((elem, x) => filled.includes(x));
    });
    setField(fieldStateCopy);
  };

  useEffect(() => {
    const interval = setInterval(updatePositions, 3000);
    setTimeout(updatePositions, 3000);
    return () => clearInterval(interval);
  }, [field]);

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
