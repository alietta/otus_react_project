import React, { FunctionComponent, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useTheme } from "sancho";
import { Field } from "./GameFieldItems";
import { Cell } from "components/Cell";
import { actions } from "./duck/reducer";
import { makeField } from "../Game/gameFunctions";

interface GameFildProps {
  cellSize: number;
}

const GameField: FunctionComponent<GameFildProps> = (props: GameFildProps) => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const { cellSize } = props;
  const field = useSelector((state: any) => state.field);
  const filledCells = useSelector((state: any) => state.game.filledCells);
  const fieldSize = useSelector((state: any) => state.settings.fieldSize);
  const onClick = (): void => {
    console.log("click");
  };

  useEffect(() => {
    const newField = makeField(fieldSize.width, fieldSize.height, filledCells);
    dispatch(actions.setField(newField));
  }, [filledCells]);

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
                  size={cellSize}
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
