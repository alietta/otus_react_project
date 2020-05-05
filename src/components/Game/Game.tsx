import React, { FunctionComponent, useState, useEffect } from "react";
import { useTheme, Layer } from "sancho";
import { GameMenu } from "../GameMenu";
import { GameField } from "../GameField";
import { preatyArray } from "./GameFunctions"

const startMock = {
  field: {
    minWidth: 2,
    maxWidth: 5,
    minHeight: 2,
    maxHeight: 5,
  }
}
/* interface GameMenuProps { */
/* } */
/* const defaultProps: GameMenuProps = { */
/* }; */

const Game: FunctionComponent<> = () => {
  const theme = useTheme();
  const [fieldSize, setFieldSize] = useState<object>({ width: startMock.minWidth, height: startMock.minHeight})
  const [field, setField] = useState<Array>([[]])
  useEffect(() => {
    let newField = preatyArray(field, fieldSize.height, [false])
    newField = newField.map(row => preatyArray(row, fieldSize.width, false));
    setField(newField);
  }, [fieldSize])

  return (
    <Layer css={{ overflow: "hidden", padding: theme.spaces.md }}>
      <GameMenu size={{...startMock.field, passSize: setFieldSize}}/>
      <GameField field={field} setField={setField}/>
    </Layer>
  );
};

export { Game };
