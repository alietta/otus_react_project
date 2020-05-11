import React, { FunctionComponent } from "react";
import { useTheme, Layer } from "sancho";
import {
  SizeForm,
  SizeFormProps,
  PercentFilled,
  PercentFilledProps,
  GameControl,
  GameControlProps,
} from "./components";

interface GameMenuProps {
  size: SizeFormProps;
  percent: PercentFilledProps;
  controll: GameControlProps;
}

const GameMenu: FunctionComponent<GameMenuProps> = (props: GameMenuProps) => {
  const { size, percent, controll } = props;
  const theme = useTheme();

  return (
    <Layer
      css={{ overflow: "hidden", padding: theme.spaces.md, maxWidth: 422 }}
    >
      <GameControl {...controll} />
      <div css={{ margin: "15px 0" }}>
        <SizeForm {...size} />
      </div>
      <PercentFilled {...percent} />
    </Layer>
  );
};

export { GameMenu };
