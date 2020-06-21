import React, { FunctionComponent, useState, useEffect } from "react";
import { useTheme, Layer } from "sancho";
import { GameMenu } from "components/GameMenu";
import { GameField } from "components/GameField";
import { preatyArray, randomByPercent } from "./gameFunctions";

const startMock = {
  field: {
    minWidth: 2,
    maxWidth: 20,
    minHeight: 2,
    maxHeight: 10,
  },
};
interface GameState {
  speed: number;
  reset: boolean;
}

const Game: FunctionComponent = () => {
  const theme = useTheme();
  const [fieldSize, setFieldSize] = useState<{ width: number; height: number }>(
    {
      width: startMock.minWidth,
      height: startMock.minHeight,
    }
  );
  const [field, setField] = useState<boolean[][]>([[]]);
  const [gameState, setGameState] = useState<GameState>({
    speed: 0,
    reset: false,
  });
  useEffect(() => {
    let newField = preatyArray(field, fieldSize.height, [false]);
    newField = newField.map((row) => preatyArray(row, fieldSize.width, false));
    setField(newField);
  }, [fieldSize]);

  useEffect(() => {
    if (gameState.reset === true) {
      const empty = Array(fieldSize.height)
        .fill(false)
        .map(() => Array(fieldSize.width).fill(false));
      setField(empty);
    }
  }, [gameState]);

  useEffect(() => {
    const newField = randomByPercent(
      startMock.field.minWidth,
      startMock.field.minHeight,
      50
    );
    setField(newField);
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
      }}
    >
      <div css={{ width: "100%", textAlign: "center" }}>
        <GameField field={field} setField={setField} />
      </div>
      <div css={{ minWidth: 422 }}>
        <GameMenu
          size={{ ...startMock.field, passSize: setFieldSize }}
          percent={{ onSubmit: setFieldPercent, startPercent: 50 }}
          controll={{ setGameState: setGameState }}
        />
      </div>
    </Layer>
  );
};

export { Game };
