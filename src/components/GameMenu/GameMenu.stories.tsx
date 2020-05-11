import React, { FC } from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { GameMenu } from "./GameMenu";
import { DarkMode } from "sancho";

export default {
  title: "GameMenu",
  decorators: [withKnobs],
};

export const gameMenyStory: FC = () => (
  <div css={{ display: "flex" }}>
    <DarkMode>
      <GameMenu />
    </DarkMode>
  </div>
);
