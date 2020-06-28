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
  const field = useSelector((state: any) => state.field);
  /* const [fieldSize, setFieldSize] = useState<{ width: number; height: number }>( */
  /*   { */
  /*     width: startMock.minWidth, */
  /*     height: startMock.minHeight, */
  /*   } */
  /* ); */
  const [gameState, setGameState] = useState<GameState>({
    speed: 0,
    reset: false,
  });
  useEffect(() => {
  }, [field]);

  useEffect(() => {
    const newField = makeField(fieldSize.width, fieldSize.height, filledCells)
    dispatch(fieldActions.setField(newField))
    const generation = getGeneration(newField);
    console.log(generation, 'check');
    setTimeout(() => {
      dispatch(fieldActions.setField(generation))
    }, 1000)
  }, [filledCells]);

  useEffect(() => {
    /* const newField = randomByPercent( */
    /*   startMock.field.minWidth, */
    /*   startMock.field.minHeight, */
    /*   50 */
    /* ); */
    /* setField(newField); */
  }, []);

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
