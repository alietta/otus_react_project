import React, { FunctionComponent, useState } from "react";
import { Field } from './GameFieldItems';

interface GameFildProps {
  xSize: number;
  ySize: number;
  field: string[][];
}

const GameField: FunctionComponent<GameFildProps> = (props) => {
  const [field, setField] = useState<Array<boolean>>(props.field);
  return <Field></Field>
};

export { GameField };
