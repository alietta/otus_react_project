import React from "react";
import { withKnobs, text } from "@storybook/addon-knobs";

import HelloWorld from "../components/HelloWorld";

export default {
  title: "HelloWorld",
  decorators: [withKnobs],
};

export const HelloWorldStory: React.FC<{}> = () => {
  const name: string = text("name", "Tanya");
  return <HelloWorld name={name} />;
};
