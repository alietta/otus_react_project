import React, { FunctionComponent, useState } from "react";
import { CellWrapper } from "./CellItems";
import { Life } from './components';

interface CellProps {
  x: number;
  y: number;
  isFilled: boolean;
  onClick: (x: number, y: number, isFilled?: boolean) => void;
}

const Cell: FunctionComponent<CellProps> = (props) => {
  const { isFilled, onClick, x, y } = props;
  const [willUnmount, setWillUnmount] = useState<boolean>(false);
  const onCellClick = (): void => {
    if (isFilled) {
      setWillUnmount(true);
      setTimeout(() => onClick(x, y, false), 1000);
    } else {
      onClick(x, y, true)
      setWillUnmount(false);
    }
  };

  return(
    <CellWrapper onClick={onCellClick}>
      {isFilled && <Life willUnmount={willUnmount} color={willUnmount ? 'pink' : 'gray'}/>}
    </CellWrapper>
  )
};

export { Cell };
