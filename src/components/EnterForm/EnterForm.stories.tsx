import React, { FC } from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { EnterForm } from "./EnterForm";
import { DarkMode, LightMode } from "sancho";

export default {
  title: "EnterForm",
  decorators: [withKnobs],
};

export const darkEnterForm: FC = () => (
  <div css={{ width: 400 }}>
    <DarkMode>
      <EnterForm />
    </DarkMode>
    <LightMode>
      <EnterForm />
    </LightMode>
  </div>
);
