import React, { FunctionComponent, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useTheme } from "sancho";
import { FieldWrapper } from "./FieldItems";
import { actions } from "./duck/reducer";
import { makeField } from "../Game/gameFunctions";
import { drawGrid, contextSettings } from "./canvasHelper";

interface GameFildProps {
  cellSize: number;
}

const Field: FunctionComponent<GameFildProps> = (props: GameFildProps) => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const canvasRef = useRef(null);
  const ctxRef = useRef(null);
  const fieldSize = useSelector((state: any) => state.settings.fieldSize);
  const cellSize = useSelector((state: any) => state.settings.cellSize);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.width = fieldSize.width;
      canvas.height = fieldSize.height;
      canvas.style.width = "${fieldSize.width / 2}px";
      canvas.style.height = "${fieldSize.height / 2}px";
      const color = theme.colors.border.default;
      console.log('ref', ctxRef.current);
      if (ctxRef.current) {
        ctxRef.current.scale(2, 2);
        drawGrid({
          ctx: ctxRef.current,
          width: fieldSize.width / 2,
          height: fieldSize.height / 2,
          step: cellSize.width,
          settings: {
            strokeStyle: color,
          },
        });
      }
    }
  }, [fieldSize, cellSize]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const context = canvas.getContext("2d");
      ctxRef.current = context;
      const color = theme.colors.border.default;
    }
  }, []);

  return (
    <FieldWrapper>
      <canvas ref={canvasRef} />
    </FieldWrapper>
  );
};

export { Field };
