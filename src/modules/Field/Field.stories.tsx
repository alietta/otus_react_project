import React, { FC } from "react";
import { withKnobs, object } from "@storybook/addon-knobs";
import { GameField } from "./GameField";

export default {
  title: "GameField",
  decorators: [withKnobs],
};

export const fieldWithCells: FC = () => (
  <GameField
    field={object("field", [
      [false, true, false],
      [false, true, false],
      [false, true, false],
    ])}
  />
);
