import React from "react";
import { withKnobs, number, array, object } from "@storybook/addon-knobs";
import { GameMenu } from "./GameMenu";
import { DarkMode, LightMode } from "sancho";

export default {
  title: "GameMenu",
  decorators: [withKnobs],
};

export const gameMenyStory = () => (
  <div css={{ display: "flex" }}>
    <DarkMode>
      <GameMenu />
    </DarkMode>
  </div>
);
