import React from "react";
import { withKnobs, number, array, object } from "@storybook/addon-knobs";
import { GameField } from "./GameField";

export default {
  title: "GameField",
  decorators: [withKnobs],
};

export const fieldWithCells = () => (
  <GameField
    field={object("field", [
      [true, false, false],
      [false, true, false],
      [true, false, false],
    ])}
  />
);
