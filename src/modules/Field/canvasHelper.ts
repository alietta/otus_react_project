export interface Point {
  x: number;
  y: number;
}

export const drawGrid = (
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
  step: number
) => {
  ctx.beginPath();
  let xPos = 0;
  while (xPos <= width) {
    drawLine(ctx, { x: xPos, y: 0 }, { x: xPos, y: height });
    xPos += step;
  }
  ctx.strokeStyle = "black";
  ctx.lineWidth = 1;
  ctx.stroke();

  ctx.beginPath();
  let yPos = 0;
  while (yPos <= height) {
    drawLine(ctx, { x: 0, y: yPos }, { x: width, y: yPos });
    yPos += step;
  }
  ctx.strokeStyle = "black";
  ctx.lineWidth = 1;
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
