import React, { FunctionComponent, useState } from 'react';

interface GameFildProps {
  xSize: number;
  ySize: number;
  field: string[][],
}

const GameField: FunctionComponent<GameFildProps> = (props) => {
  const [ field, setField ] = useState<Array<boolean>>(props.field);
  return <div>field</div>;
};

export { GameField };
