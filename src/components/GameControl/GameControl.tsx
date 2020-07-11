import React, { FunctionComponent } from "react";
import { LayerStyle } from "./GameControlStyle";
import { Speed } from "@/modules/Game/duck/types";
import {
  Layer,
  IconPause,
  IconFastForward,
  IconPlay,
  IconRewind,
  IconRefreshCw,
  Button
} from "sancho";

export interface GameControlProps {
  resetGame: () => void;
  changeSpeed: (speed: number) => void;
  speed: number;
}
const GameControl: FunctionComponent<GameControlProps> = ({
  resetGame,
  changeSpeed,
  speed
}: GameControlProps) => {
  const speedButtonClick = (speedClick: Speed): (() => void) => {
    return (): void => {
      changeSpeed(speedClick);
    };
  };

  return (
    <Layer elevation="xs" css={LayerStyle}>
      <Button
        size="lg"
        name="reset"
        intent="primary"
        variant="outline"
        onClick={resetGame}
      >
        <IconRefreshCw />
      </Button>
      <Button
        size="lg"
        name="pause"
        intent="primary"
        variant="outline"
        onClick={speedButtonClick("pause")}
      >
        <IconPause />
      </Button>
      <Button
        size="lg"
        name="play"
        intent="primary"
        variant="outline"
        onClick={speedButtonClick("play")}
      >
        <IconPlay />
      </Button>
      <Button
        size="lg"
        name="slow"
        intent="primary"
        variant="outline"
        onClick={speedButtonClick("slow")}
      >
        <IconRewind />
      </Button>
      <Button
        size="lg"
        name="fast"
        intent="primary"
        variant="outline"
        onClick={speedButtonClick("fast")}
      >
        <IconFastForward />
      </Button>
    </Layer>
  );
};

export { GameControl };
