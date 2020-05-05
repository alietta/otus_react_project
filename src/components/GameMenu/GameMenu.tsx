import React, { FunctionComponent, useState, useEffect } from "react";
import { useTheme, Layer } from "sancho";
import { SizeForm, PercentFilled, GameControl } from "./components";

/* interface GameMenuProps { */
/* } */
/* const defaultProps: GameMenuProps = { */
/* }; */

const GameMenu: FunctionComponent<GameMenuProps> = () => {
  const theme = useTheme();

  return (
    <Layer css={{ overflow: "hidden", padding: theme.spaces.md }}>
      <GameControl />
      <div css={{ margin: "15px 0" }}>
        <SizeForm />
      </div>
      <PercentFilled />
    </Layer>
  );
};

export { GameMenu };
