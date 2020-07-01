import React, { FunctionComponent } from "react";
import { LayerStyle } from "./GameControlStyle";
import {
  Layer,
  IconPause,
  IconFastForward,
  IconPlay,
  IconRewind,
  IconRefreshCw,
  Button,
} from "sancho";

export interface GameControlProps {
  resetGame: () => void;
  changeSpeed: (speed: number) => void;
}

const GameControl: FunctionComponent<GameControlProps> = ({
  resetGame,
  changeSpeed,
}: GameControlProps) => {
  const speedButtonClick = (newSpeed: number): (() => void) => {
    return (): void => {
      changeSpeed(newSpeed);
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
        onClick={speedButtonClick(0)}
      >
        <IconPause />
      </Button>
      <Button
        size="lg"
        name="play"
        intent="primary"
        variant="outline"
        onClick={speedButtonClick(1)}
      >
        <IconPlay />
      </Button>
      <Button
        size="lg"
        name="slow"
        intent="primary"
        variant="outline"
        onClick={speedButtonClick(0.5)}
      >
        <IconRewind />
      </Button>
      <Button
        size="lg"
        name="fast"
        intent="primary"
        variant="outline"
        onClick={speedButtonClick(2)}
      >
        <IconFastForward />
      </Button>
    </Layer>
  );
};

export { GameControl };
