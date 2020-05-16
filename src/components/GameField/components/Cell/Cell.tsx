import React, { FunctionComponent, useMemo } from "react";
import { CellWrapper } from "./CellItems";
import { useTheme } from "sancho";

interface CellProps {
  x: number;
  y: number;
  isFilled: boolean;
  onClick: (x: number, y: number, isFilled?: boolean) => void;
}

const Cell: FunctionComponent<CellProps> = (props: CellProps) => {
  const theme = useTheme();
  const { isFilled, onClick, x, y } = props;
  const fillColor = useMemo(() => {
    const {
      colors: { background, text },
    } = theme;
    return isFilled ? text.default : background.default;
  }, [isFilled]);
  const onCellClick = (): void => {
    onClick(x, y, !isFilled);
  };

  return (
    <CellWrapper
      css={{ borderColor: theme.colors.border.default, background: fillColor }}
      onClick={onCellClick}
    ></CellWrapper>
  );
};

export { Cell };
