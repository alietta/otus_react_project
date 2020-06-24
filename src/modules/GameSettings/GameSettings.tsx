import React, { FC, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useTheme, Layer, Text } from "sancho";
import { SizeForm } from "@/components/SizeForm";
import { PercentFilled } from "@/components/PercentFilled";
import { actions } from "./duck/reducer";
import { actions as gameActions } from "../Game/duck/reducer";
import { randomByPercent } from "../Game/gameFunctions";

/* interface GameSettingsProps { */
/* } */

const GameSettings: FC<> = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const [size, setSize] = useState({ min: 3, max: 10 });
  const cellSize = useSelector((state: any) => state.settings.cellSize);
  const fieldSize = useSelector((state: any) => state.settings.fieldSize);
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

  useEffect(() => {
    setSize({ min: 3, max: Math.floor(900 / cellSize.width) });
  }, [cellSize.width]);

  useEffect(() => {
    dispatch(gameActions.fillCells([]))
  }, [fieldSize])

  return (
    <Layer
      css={{ overflow: "hidden", padding: theme.spaces.md, maxWidth: 422 }}
    >
      <Text variant="h3">Game settings</Text>
      <div
        css={{
          margin: "15px 0",
          display: "flex",
          justifyContent: "space-between",
          "> div": { width: "47%" },
        }}
      >
        <SizeForm
          minWidth={size.min}
          maxWidth={size.max}
          minHeight={size.min}
          maxHeight={size.max}
          label="Field"
          passSize={passSize}
        />
        <SizeForm
          label="Cell"
          minWidth={5}
          maxWidth={25}
          minHeight={5}
          maxHeight={25}
          passSize={passCellSize}
        />
      </div>
      <PercentFilled onSubmit={changePercent}/>
    </Layer>
  );
};

export { GameSettings };
