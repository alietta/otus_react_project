import React, { FC, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useTheme, Layer, Text, Button } from "sancho";
import { GameSettings } from "@/components/GameSettings";
import { actions } from "./duck/reducer";
import { actions as gameActions } from "../Game/duck/reducer";
import { randomByPercent } from "../Game/gameFunctions";


const GameMenu: FC<> = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const [size, setSize] = useState({ min: 3, max: 10 });

  const cellSize = useSelector((state: any) => state.settings.cellSize);
  const fieldSize = useSelector((state: any) => state.settings.fieldSize);
  const gameStatus = useSelector((state: any) => state.game.status);

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
    const filledCells = randomByPercent(fieldSize.width, fieldSize.height, percent)
    dispatch(gameActions.fillCells(filledCells))
  }

  const startGame = (): void => {
    dispatch(gameActions.changeStatus('game'))
  }

  useEffect(() => {
    setSize({ min: 3, max: Math.floor(900 / cellSize.width) });
  }, [cellSize.width]);

  useEffect(() => {
    dispatch(gameActions.fillCells([]))
  }, [fieldSize])

  return (
    <div>
      <GameSettings 
        size={size}
        passSize={passSize}
        passCellSize={passCellSize}
        changePercent={changePercent}
        startGame={startGame}
      />
    </div>
  );
};

export { GameMenu };
