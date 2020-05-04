import React, { FunctionComponent, useState, useEffect } from "react";
import { jsx, tsx } from "@emotion/core";
import { LayerStyle } from "./GameControlStyle";
import {
  useTheme,
  Layer,
  IconPause,
  IconFastForward,
  IconPlay,
  IconRewind,
  IconRefreshCw,
  Button,
} from "sancho";

interface GameControl {
  setGameState: (values?: { speed: number; reset: boolean }) => void;
}
const defaultProps: GameControlProps = {
  setGameState: (): void => {
    console.log("set game state");
  },
};

const GameControl: FunctionComponent<GameControlProps> = (
  props = defaultProps
) => {
  const { setGameState } = props;
  const theme = useTheme();
  const [speed, setSpeed] = useState<number>(0);

  const resetGame = (e): void => {
    console.log("here");
    setGameState({ speed: 0, reset: true });
    setSpeed(0);
  };

  const speedButtonClick = (newSpeed: number): void => {
    return (): void => {
      setGameState({ speed: newSpeed, reset: false });
      setSpeed(newSpeed);
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

GameControl.defaultProps = defaultProps;
export { GameControl };
