import React from "react";
import { withKnobs, number, array, object } from "@storybook/addon-knobs";
import { GameControl } from "./GameControl";
import { DarkMode, LightMode } from "sancho";
import { jsx } from "@emotion/core";

export default {
  title: "GameControl",
  decorators: [withKnobs],
};

export const gameControlStory = () => (
  <div>
    <DarkMode>
      <GameControl />
    </DarkMode>
    <LightMode>
      <GameControl />
    </LightMode>
  </div>
);
