import React, { FunctionComponent, useState, useEffect } from "react";
import { useTheme, Layer } from "sancho";
import { SizeForm, PercentFilled, GameControl } from "./components";

interface GameMenuProps {
  size: object;
}
/* const defaultProps: GameMenuProps = { */
/* }; */

const GameMenu: FunctionComponent<GameMenuProps> = (props) => {
  const { size, percent } = props;
  const theme = useTheme();

  return (
    <Layer
      css={{ overflow: "hidden", padding: theme.spaces.md, maxWidth: 422 }}
    >
      <GameControl />
      <div css={{ margin: "15px 0" }}>
        <SizeForm {...size} />
      </div>
      <PercentFilled {...percent} />
    </Layer>
  );
};

export { GameMenu };
