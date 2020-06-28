import React, { FunctionComponent, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useTheme, Layer } from "sancho";
import { GameMenu } from "@/modules/GameMenu";
import { GameField } from "../GameField";
import { Field } from "../Field";
import { actions as fieldActions } from "../Field/duck/reducer";
import { preatyArray, randomByPercent, makeField } from "./gameFunctions";
import { getGeneration } from "./engine";

const startMock = {
  field: {
    minWidth: 5,
    maxWidth: 20,
    minHeight: 5,
    maxHeight: 10,
  },
};
interface GameState {
  speed: number;
  reset: boolean;
}

const Game: FunctionComponent = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const fieldSize = useSelector((state: any) => state.settings.fieldSize);
  const cellSize = useSelector((state: any) => state.settings.cellSize);
  const filledCells = useSelector((state: any) => state.game.filledCells);
  const speed = useSelector((state: any) => state.game.speed);
  const field = useSelector((state: any) => state.field);
  const [gameState, setGameState] = useState<GameState>({
    speed: 0,
    reset: false,
  });

  useEffect(() => {
    const newField = makeField(fieldSize.width, fieldSize.height, filledCells);
    dispatch(fieldActions.setField(newField));
  }, [filledCells]);

  useEffect(() => {
    let interval: any = null;
    if (speed > 0) {
      interval = setInterval(() => {
        const generation = getGeneration(field);
        dispatch(fieldActions.setField(generation));
      }, 1000 * speed);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [speed, field]);

  const setFieldPercent = (perc: number): void => {
    const newField = randomByPercent(fieldSize.width, fieldSize.height, perc);
    setField(newField);
  };

  return (
    <Layer
      css={{
        overflow: "hidden",
        padding: theme.spaces.md,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        flexDirection: "column",
      }}
    >
      <div css={{ minWidth: 422 }}>
        <GameMenu />
      </div>
      <div css={{ width: "100%", textAlign: "center" }}>
        <Field />
      </div>
    </Layer>
  );
};

export { Game };
