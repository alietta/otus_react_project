import "jest-canvas-mock";

import {
  contextSettings,
  drawLine,
  drawGrid,
  drawCell,
  drawField,
} from "./canvasHelper";

describe("Canvas Helper", () => {
  let ctx;
  beforeEach(() => {
    ctx = new window.CanvasRenderingContext2D();
    ctx._canvas = {
      width: 100,
      height: 100,
    };
  });
  describe("contextSettings", () => {
    it("def settings", () => {
      contextSettings(ctx, {});
      expect(ctx.strokeStyle).toEqual("#000");
      expect(ctx.fillStyle).toEqual("#fff");
      expect(ctx.lineWidth).toEqual(1);
      expect(ctx.__getEvents().length).toEqual(3);
    });
    it("passed settings", () => {
      contextSettings(ctx, {
        strokeStyle: "#f0f",
        lineWidth: 3,
        fillStyle: "#111",
      });
      expect(ctx.strokeStyle).toEqual("#f0f");
      expect(ctx.fillStyle).toEqual("#111");
      expect(ctx.lineWidth).toEqual(3);
      expect(ctx.__getEvents().length).toEqual(3);
    });
  });
  describe("drawLine", () => {
    it("draw line", () => {
      drawLine(ctx, { x: 0, y: 0 }, { x: 10, y: 0 });
      const events = ctx.__getEvents().map(({ type }) => type);
      expect(events).toEqual(["moveTo", "lineTo"]);
    });
  });
  describe("drawGrid", () => {
    it("draw grid", () => {
      drawGrid({
        ctx,
        width: 100,
        height: 100,
        step: 10,
      });
      const path = ctx.__getPath();
      expect(path).toMatchSnapshot();
    });
  });
  describe("drawCell", () => {
    it("draw cell", () => {
      drawCell({
        y: 0,
        x: 0,
        ctx,
        width: 10,
        height: 10,
      });
      const events = ctx.__getEvents();
      expect(events[0].type).toEqual("fillRect");
      expect(events[0].props).toEqual({
        width: 8,
        height: 8,
        x: 1,
        y: 1,
      });
    });
  });
  describe("drawField", () => {
    it("draw field", () => {
      drawField({
        ctx,
        width: 10,
        height: 10,
        field: [
          [false, true, false],
          [false, true, false],
          [false, true, false],
        ],
      });
      const events = ctx.__getPath();
      expect(events).toMatchSnapshot();
    });
  });
});
