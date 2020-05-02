import React, { FunctionComponent, useState, useEffect } from "react";
import { CellWrapper } from "./CellItems";
import { Life } from "./components";

interface CellProps {
  x: number;
  y: number;
  isFilled: boolean;
  onClick: (x: number, y: number, isFilled?: boolean) => void;
}

const Cell: FunctionComponent<CellProps> = (props) => {
  const { isFilled, onClick, x, y } = props;
  const [willUnmount, setWillUnmount] = useState<boolean>(false);
  const [showLife, setShowLife] = useState<boolean>(isFilled);
  const onCellClick = (): void => {
    onClick(x, y, !isFilled);
  };

  useEffect(() => {
    if (!isFilled) {
      setWillUnmount(true);
      setTimeout(() => setShowLife(false), 1000);
    } else {
      setWillUnmount(false);
      setShowLife(true);
    }
  }, [isFilled]);

  return (
    <CellWrapper onClick={onCellClick}>
      {showLife && (
        <Life willUnmount={willUnmount} color={willUnmount ? "pink" : "gray"} />
      )}
    </CellWrapper>
  );
};

export { Cell };
