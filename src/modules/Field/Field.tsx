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
  const canvasRef = useRef(null)
  const ctxRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.width = 200;
      canvas.height = 200;
      canvas.style.width = 100;
      canvas.style.height = 100;
      const context = canvas.getContext("2d");
      context.scale(2, 2)
      ctxRef.current = context;
      const color = theme.colors.border.default;
      drawGrid({
        ctx: context,
        width: 100,
        height: 100,
        step: 10,
        settings: {
          strokeStyle: color
        }
      })
    }
  }, []);

  return (
    <FieldWrapper>
      <canvas
        ref={canvasRef}
      />
    </FieldWrapper>
  );
};

export { Field };
