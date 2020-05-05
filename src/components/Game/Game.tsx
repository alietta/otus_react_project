import React, { FunctionComponent, useState, useEffect } from "react";
import { useTheme, Layer } from "sancho";
import { GameMenu } from "../GameMenu";
import { GameField } from "../GameField";
import { preatyArray, randomByPercent } from "./GameFunctions";

const startMock = {
  field: {
    minWidth: 2,
    maxWidth: 5,
    minHeight: 2,
    maxHeight: 5,
  },
};
/* interface GameMenuProps { */
/* } */
/* const defaultProps: GameMenuProps = { */
/* }; */

const Game: FunctionComponent<> = () => {
  const theme = useTheme();
  const [fieldSize, setFieldSize] = useState<object>({
    width: startMock.minWidth,
    height: startMock.minHeight,
  });
  const [field, setField] = useState<Array>([[]]);
  const [percent, setPercent] = useState<number>(50);
  useEffect(() => {
    let newField = preatyArray(field, fieldSize.height, [false]);
    newField = newField.map((row) => preatyArray(row, fieldSize.width, false));
    setField(newField);
  }, [fieldSize]);

  useEffect(() => {
    const newField = randomByPercent(
      startMock.field.minWidth,
      startMock.field.minHeight,
      50
    );
    setField(newField);
  }, []);

  const setFieldPercent = (perc: number): void => {
    const newField = randomByPercent(fieldSize.width, fieldSize.height, perc);
    setPercent(perc);
    setField(newField);
  };

  return (
    <Layer css={{ overflow: "hidden", padding: theme.spaces.md }}>
      <GameMenu
        size={{ ...startMock.field, passSize: setFieldSize }}
        percent={{ onSubmit: setFieldPercent }}
      />
      <GameField field={field} setField={setField} />
    </Layer>
  );
};

export { Game };
