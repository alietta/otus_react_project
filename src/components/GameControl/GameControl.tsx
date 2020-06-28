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
  speed: number;
}

const GameControl: FunctionComponent<GameControlProps> = ({
  resetGame,
  changeSpeed,
  speed,
}: GameControlProps) => {
  const speedButtonClick = (
    speedClick: "pause" | "play" | "slow" | "fast"
  ): (() => void) => {
    return (): void => {
      const round = (num: number): number => {
        const row = `${num}`.substr(0, 3)
        return parseFloat(row, 10)
      }
      const speedCounter = {
        pause: () => 0,
        play: () => 1,
        slow: (speed: number) => {
          if (speed === 5 || speed === 0) {
            return speed;
          }
          return speed < 0.5 ? round(speed + 0.1) : speed + 0.5
        },
        fast: (speed: number) => {
          if (speed === 0.1 || speed === 0) {
            return speed;
          }
          return speed <= 0.5 ? round(speed - 0.1) : speed - 0.5
        },
      };
      const newSpeed = speedCounter[speedClick](speed);
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
