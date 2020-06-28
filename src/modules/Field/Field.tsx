import React, { FunctionComponent, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useTheme } from "sancho";
import { FieldWrapper } from "./FieldItems";
import { actions } from "./duck/reducer";
import { makeFieldPos } from "../Game/gameFunctions";
import { drawGrid, drawCell } from "./canvasHelper";

interface GameFildProps {
  cellSize: number;
}

const Field: FunctionComponent<GameFildProps> = (props: GameFildProps) => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const canvasRef = useRef(null);
  const ctxRef = useRef(null);
  const filledCells = useSelector((state: any) => state.game.filledCells);
  const field = useSelector((state: any) => state.field);
  const fieldSize = useSelector((state: any) => state.settings.fieldSize);
  const cellSize = useSelector((state: any) => state.settings.cellSize);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const width = fieldSize.width * cellSize.width;
      const height = fieldSize.height * cellSize.height;
      canvas.width = width * 2;
      canvas.height = height * 2;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      console.log("ref", canvas.style.width);
      if (ctxRef.current) {
        ctxRef.current.scale(2, 2);
        drawGrid({
          ctx: ctxRef.current,
          width: width,
          height: height,
          step: cellSize.width,
          settings: {
            strokeStyle: theme.colors.border.default,
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

  useEffect(() => {
    const width = fieldSize.width * cellSize.width;
    const height = fieldSize.height * cellSize.height;
    ctxRef.current.clearRect(0, 0, width, height)
    drawGrid({
      ctx: ctxRef.current,
      width: width,
      height: height,
      step: cellSize.width,
      settings: {
        strokeStyle: theme.colors.border.default,
      },
    });
    field.forEach((cells: boolean[], y: number) => {
      cells.forEach((cell: boolean, x: number) => {
        if (cell) {
          drawCell({
            x,
            y,
            width: cellSize.width,
            height: cellSize.height,
            settings: { fillStyle: "white" },
            ctx: ctxRef.current,
          });
        }
      })
    });
  }, [field]);

  return (
    <FieldWrapper>
      <canvas ref={canvasRef} />
    </FieldWrapper>
  );
};

export { Field };