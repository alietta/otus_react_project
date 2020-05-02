import React, { useState } from "react";
import {
  withKnobs,
  number,
  text,
  array,
  boolean,
} from "@storybook/addon-knobs";
import { Life } from "./Life";

export default {
  title: "Life",
  decorators: [withKnobs],
};

export const lifeDynamic = () => {
  const [show, setShow] = useState(true);
  const [willUnmount, setWillUnmount] = useState(false);
  const buttonClick = () => {
    if (show) {
      setWillUnmount(true);
      setTimeout(() => setShow(false), 1000);
    } else {
      setShow(true);
      setWillUnmount(false);
    }
  };
  return (
    <div style={{ height: "30px", width: "30px" }}>
      <button style={{ marginTop: "30px" }} onClick={buttonClick}>
        hide/show
      </button>
      {show && <Life color={text("color", "red")} willUnmount={willUnmount} />}
    </div>
  );
};
