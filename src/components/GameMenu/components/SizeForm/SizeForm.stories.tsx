import React, { FC } from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { SizeForm } from "./SizeForm";
import { DarkMode, LightMode } from "sancho";

export default {
  title: "SizeForm",
  decorators: [withKnobs],
};

export const darkSizeForm: FC = () => {
  const sizeProp = {
    minWidth: 3,
    maxWidth: 10,
    minHeight: 3,
    maxHeight: 10,
    passSize: (): void => {
      console.log("pass size");
    },
  };
  return (
    <div css={{ width: 400 }}>
      <DarkMode>
        <SizeForm {...sizeProp} />
      </DarkMode>
      <LightMode>
        <SizeForm {...sizeProp} />
      </LightMode>
    </div>
  );
};
