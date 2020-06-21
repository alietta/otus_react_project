import React, { FC } from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { Game } from "./Game";
import { DarkMode } from "sancho";

export default {
  title: "Game",
  decorators: [withKnobs],
};

export const gameStory: FC = () => (
  <div css={{ display: "flex" }}>
    <DarkMode>
      <Game />
    </DarkMode>
  </div>
);
