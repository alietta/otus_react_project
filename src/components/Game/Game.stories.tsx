import React from "react";
import { withKnobs, number, array, object } from "@storybook/addon-knobs";
import { Game } from "./Game";
import { DarkMode, LightMode } from "sancho";

export default {
  title: "Game",
  decorators: [withKnobs],
};

export const gameStory = () => (
  <div css={{ display: "flex" }}>
    <DarkMode>
      <Game />
    </DarkMode>
  </div>
);
