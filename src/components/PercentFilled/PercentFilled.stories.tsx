import React from "react";
import { withKnobs, number, array, object } from "@storybook/addon-knobs";
import { PercentFilled } from "./PercentFilled";
import { DarkMode, LightMode } from "sancho";
import { jsx } from "@emotion/core";

export default {
  title: "PercentFilled",
  decorators: [withKnobs],
};

export const percentFilledStory = () => (
  <div css={{ width: 400 }}>
    <DarkMode>
      <PercentFilled />
    </DarkMode>
    <LightMode>
      <PercentFilled />
    </LightMode>
  </div>
);
