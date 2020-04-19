import React from "react";
import { withKnobs, number, array } from "@storybook/addon-knobs";
import { GameField } from "./GameField";

export default {
  title: "GameField",
  decorators: [withKnobs],
};

export const withRealField = () => (
  <GameField
    xSize={number("xSize", 3)}
    ySize={number("ySize", 3)}
    field={array("field", [
      [false, true, false],
      [false, true, false],
      [false, true, false],
    ])}
  />
);
