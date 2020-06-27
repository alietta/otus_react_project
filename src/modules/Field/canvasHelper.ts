export interface Point {
  x: number;
  y: number;
}

interface Settings {
  strokeStyle?: string;
  lineWidth?: number;
}

export const contextSettings = (ctx: CanvasRenderingContext2D, { strokeStyle = 'black', lineWidth = 1 }: Settings) => {
  ctx.strokeStyle = strokeStyle;
  ctx.lineWidth = lineWidth;
}

interface Grid {
  ctx: CanvasRenderingContext2D;
  width: number;
  height: number;
  step: number;
  settings: Settings;
}

export const drawGrid = ({
  ctx,
  width,
  height,
  step,
  settings,
}: Grid) => {
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
  contextSettings(ctx, settings)
  ctx.stroke();
};

export const drawLine = (
  ctx: CanvasRenderingContext2D,
  from: Point,
  to: Point
) => {
  ctx.moveTo(from.x, from.y);
  ctx.lineTo(to.x, to.y);
};
