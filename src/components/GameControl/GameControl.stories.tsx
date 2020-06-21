import React, { FC } from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { GameControl } from "./GameControl";
import { DarkMode, LightMode } from "sancho";

export default {
  title: "GameControl",
  decorators: [withKnobs],
};

export const gameControlStory: FC = () => (
  <div>
    <DarkMode>
      <GameControl setGameState={(): void => console.log("set game")} />
    </DarkMode>
    <LightMode>
      <GameControl setGameState={(): void => console.log("set game")} />
    </LightMode>
  </div>
);
