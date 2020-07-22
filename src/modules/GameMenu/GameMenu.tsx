import React, { FC, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GameSettings } from "@/components/GameSettings";
import { GameControl } from "@/components/GameControl";
import { Speed } from "@/modules/Game/duck/types";
import { actions } from "./duck/reducer";
import { actions as gameActions } from "../Game/duck/reducer";
import { randomByPercent } from "../Game/gameFunctions";

const GameMenu: FC = () => {
  const dispatch = useDispatch();
  const [size, setSize] = useState({ min: 3, max: 10 });

  const cellSize = useSelector((state: any) => state.settings.cellSize);
  const fieldSize = useSelector((state: any) => state.settings.fieldSize);
  const gameStatus = useSelector((state: any) => state.game.status);
  const speed = useSelector((state: any) => state.game.speed);

  const passSize = (values: { width: number; height: number }) => {
    dispatch(actions.field(values));
  };

  const passCellSize = ({
    width,
    height,
  }: {
    width: number;
    height: number;
  }) => {
    const result = Math.max(width, height);
    dispatch(actions.cell({ width: result, height: result }));
  };

  const changePercent = (percent: number): void => {
    const filledCells = randomByPercent(
      fieldSize.width,
      fieldSize.height,
      percent
    );
    dispatch(gameActions.fillCells(filledCells));
  };

  const startGame = (): void => {
    dispatch(gameActions.changeStatus("game"));
  };

  const resetGame = (): void => {
    dispatch(gameActions.changeStatus("settings"));
  };

  const changeSpeed = (speed: Speed): void => {
    dispatch(gameActions.changeSpeed(speed));
  };

  useEffect(() => {
    setSize({ min: 3, max: Math.floor(900 / cellSize.width) });
  }, [cellSize.width]);

  useEffect(() => {
    dispatch(gameActions.fillCells([]));
  }, [fieldSize]);

  return (
    <div css={{ marginBottom: 30 }}>
      {gameStatus === "settings" ? (
        <GameSettings
          size={size}
          passSize={passSize}
          passCellSize={passCellSize}
          changePercent={changePercent}
          startGame={startGame}
        />
      ) : (
        <GameControl
          speed={speed}
          resetGame={resetGame}
          changeSpeed={changeSpeed}
        />
      )}
    </div>
  );
};

export { GameMenu };
