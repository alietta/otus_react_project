export interface Point {
  x: number;
  y: number;
}

interface Settings {
  strokeStyle?: string;
  lineWidth?: number;
  fillStyle?: string;
}

export const contextSettings = (
  ctx: CanvasRenderingContext2D,
  settings: Settings
) => {
  const def = {
    strokeStyle: "black",
    lineWidth: 1,
    fillStyle: "white",
  };
  const { strokeStyle, lineWidth, fillStyle } = { ...def, ...settings };
  ctx.strokeStyle = strokeStyle;
  ctx.lineWidth = lineWidth;
  ctx.fillStyle = fillStyle;
};

interface Grid {
  ctx: CanvasRenderingContext2D;
  width: number;
  height: number;
  step: number;
  settings: Settings;
}

export const drawLine = (
  ctx: CanvasRenderingContext2D,
  from: Point,
  to: Point
) => {
  ctx.moveTo(from.x, from.y);
  ctx.lineTo(to.x, to.y);
};

export const drawGrid = ({ ctx, width, height, step, settings }: Grid) => {
  ctx.beginPath();
  let xPos = 0;
  while (xPos <= width) {
    drawLine(ctx, { x: xPos, y: 0 }, { x: xPos, y: height });
    xPos += step;
  }

  let yPos = 0;
  while (yPos <= height) {
    drawLine(ctx, { x: 0, y: yPos }, { x: width, y: yPos });
    yPos += step;
  }
  contextSettings(ctx, settings);
  ctx.stroke();
};

interface Rect {
  ctx: CanvasRenderingContext2D;
  x: number;
  y: number;
  width: number;
  height: number;
  settings: Settings;
}

export const drawCell = ({ ctx, x, y, width, height, settings = {} }: Rect) => {
  contextSettings(settings);
  const xPos = x * width + 1;
  const yPos = y * height + 1;
  ctx.fillRect(xPos, yPos, width - 2, height - 2);
};

interface Field {
  ctx: CanvasRenderingContext2D;
  field: boolean[][];
  width: number;
  height: number;
  redraw?: boolean;
  settings: Settings;
}

export const drawField = ({
  ctx,
  field,
  width,
  height,
  redraw = true,
  settings = {},
}: Field) => {
  if (redraw) {
    const canvasWidth = ctx.canvas.width;
    const canvasHeight = ctx.canvas.height;
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    drawGrid({
      ctx,
      width: canvasWidth,
      height: canvasHeight,
      step: width,
      settings,
    });
  }
  field.forEach((cells: boolean[], y: number) => {
    cells.forEach((cell: boolean, x: number) => {
      if (cell) {
        drawCell({
          x,
          y,
          width,
          height,
          settings,
          ctx,
        });
      }
    });
  });
};
