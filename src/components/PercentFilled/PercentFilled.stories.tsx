import React, { FC } from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { PercentFilled } from "./PercentFilled";
import { DarkMode, LightMode } from "sancho";

export default {
  title: "PercentFilled",
  decorators: [withKnobs],
};

export const percentFilledStory: FC = () => (
  <div css={{ width: 400 }}>
    <DarkMode>
      <PercentFilled onSubmit={(): void => console.log("submint")} />
    </DarkMode>
    <LightMode>
      <PercentFilled onSubmit={(): void => console.log("submint")} />
    </LightMode>
  </div>
);
