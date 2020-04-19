import React, { FunctionComponent, useState } from "react";
import { CellWrapper } from "./CellItems";

interface CellProps {
  x: number;
  y: number;
  isFilled: boolean;
  onClick: (x: number, y: number, isFilled?: boolean) => void;
}

const Cell: FunctionComponent<CellProps> = (props) => {
  const { isFilled, onClick, x, y } = props;
  const onCellClick = (): void => {
    onClick(x, y, !isFilled);
  };

  return <CellWrapper isFilled={isFilled} onClick={onCellClick}></CellWrapper>;
};

export { Cell };
