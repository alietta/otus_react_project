import React from "react";
import { withKnobs, number, array, object } from "@storybook/addon-knobs";
import { EnterForm } from "./EnterForm";
import { DarkMode, LightMode } from "sancho";
import { jsx } from "@emotion/core";

export default {
  title: "EnterForm",
  decorators: [withKnobs],
};

export const darkEnterForm = () => (
  <div css={{ width: 400 }}>
    <DarkMode>
      <EnterForm />
    </DarkMode>
    <LightMode>
      <EnterForm />
    </LightMode>
  </div>
);
