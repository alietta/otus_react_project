import React, { FunctionComponent, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useTheme } from "sancho";
import { FieldWrapper } from "./FieldItems";
import { actions } from "./duck/reducer";
import { makeField } from "../Game/gameFunctions";
import { drawGrid } from "./canvasHelper";

interface GameFildProps {
  cellSize: number;
}

const Field: FunctionComponent<GameFildProps> = (props: GameFildProps) => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const canvasRef = useRef(null)
  const contextRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.width = 200;
      canvas.height = 200;
      canvas.style.width = 100;
      canvas.style.height = 100;
      const context = canvas.getContext("2d");
      context.scale(2, 2)
      contextRef.current = context;
      drawGrid(context, 100, 100, 10)
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
