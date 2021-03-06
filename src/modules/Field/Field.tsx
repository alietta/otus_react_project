import React, { FunctionComponent, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { useTheme } from "sancho";
import { FieldWrapper } from "./FieldItems";
import { drawGrid, drawField } from "./canvasHelper";

const Field: FunctionComponent = () => {
  const theme = useTheme();
  const canvasRef = useRef(null);
  const ctxRef = useRef(null);
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
    }
  }, []);

  useEffect(() => {
    if (ctxRef.current) {
      drawField({
        ctx: ctxRef.current,
        field,
        width: cellSize.width,
        height: cellSize.height,
        settings: {
          fillStyle: "white",
          strokeStyle: theme.colors.border.default,
        },
      });
    }
  }, [field]);

  return (
    <FieldWrapper>
      <canvas ref={canvasRef} />
    </FieldWrapper>
  );
};

export { Field };
