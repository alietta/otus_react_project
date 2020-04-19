import React, { FunctionComponent, useState } from "react";
import { Field } from "./GameFieldItems";
import { Cell } from './components';

interface GameFildProps {
  xSize: number;
  ySize: number;
  field: string[][];
}

const GameField: FunctionComponent<GameFildProps> = (props) => {
  const [field, setField] = useState<Array<boolean>>(props.field);
  console.warn('test', field);
  return(
    <Field>
    { field.map((arr, index) => {
      return (
        <div key={`row-${index}`}>
          { arr.map((isFilled, ind) => {
            return <Cell key={`y-${index}_x-${ind}`} isFilled={isFilled} />
          })}
        </div>
      );
    }) }
    </Field>
  );
};

export { GameField };
