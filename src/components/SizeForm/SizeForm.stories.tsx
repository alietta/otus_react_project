import React from "react";
import { withKnobs, number, array, object } from "@storybook/addon-knobs";
import { SizeForm } from "./SizeForm";
import { DarkMode, LightMode } from "sancho";
import { jsx } from "@emotion/core";

export default {
  title: "SizeForm",
  decorators: [withKnobs],
};

export const darkSizrForm = () => (
  <div css={{ width: 400 }}>
    <DarkMode>
      <SizeForm />
    </DarkMode>
    <LightMode>
      <SizeForm />
    </LightMode>
  </div>
);
