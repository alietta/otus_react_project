import React from "react";
import { withKnobs, number, array, boolean } from "@storybook/addon-knobs";
import { Cell } from "./Cell";

export default {
  title: "Cell",
  decorators: [withKnobs],
};

export const cellNotFilled = () => (
  <Cell isFilled={boolean("isFilled", false)} />
);
export const cellFilled = () => <Cell isFilled={boolean("isFilled", true)} />;
