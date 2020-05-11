import React, { FC } from "react";
import { withKnobs, boolean } from "@storybook/addon-knobs";
import { Cell } from "./Cell";

export default {
  title: "Cell",
  decorators: [withKnobs],
};

export const cellNotFilled: FC = () => (
  <Cell isFilled={boolean("isFilled", false)} />
);
export const cellFilled: FC = () => (
  <Cell isFilled={boolean("isFilled", true)} />
);
