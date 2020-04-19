import React from "react";
import { withKnobs, number, array, object } from "@storybook/addon-knobs";
import { GameField } from "./GameField";

export default {
  title: "GameField",
  decorators: [withKnobs],
};

export const fieldWithCells = () => (
  <GameField
    xSize={number("xSize", 3)}
    ySize={number("ySize", 3)}
    field={object("field", [
      [false, true, false],
      [false, true, false],
      [false, true, false],
    ])}
  />
);
