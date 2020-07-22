import React, { FunctionComponent, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useTheme, Layer } from "sancho";
import { GameMenu } from "@/modules/GameMenu";
import { Field } from "../Field";
import { actions as fieldActions } from "../Field/duck/reducer";
import { makeField } from "./gameFunctions";
import { getGeneration } from "./engine";

const Game: FunctionComponent = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const fieldSize = useSelector((state: any) => state.settings.fieldSize);
  const filledCells = useSelector((state: any) => state.game.filledCells);
  const speed = useSelector((state: any) => state.game.speed);
  const field = useSelector((state: any) => state.field);

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
