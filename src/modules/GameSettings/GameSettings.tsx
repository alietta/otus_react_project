import React, { FC, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useTheme, Layer, Text } from "sancho";
import { SizeForm } from "@/components/SizeForm";
import { PercentFilled } from "@/components/PercentFilled";
import { actions } from "./duck/reducer";

/* interface GameSettingsProps { */
/* } */

const GameSettings: FC<> = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const [size, setSize] = useState({ min: 3, max: 10 });
  const cellSize = useSelector((state: any) => state.settings.cellSize);
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

  useEffect(() => {
    console.log(cellSize.width);
    setSize({ min: 3, max: Math.floor(900 / cellSize.width) });
  }, [cellSize.width]);

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
      {/* <PercentFilled {...percent} /> */}
    </Layer>
  );
};

export { GameSettings };
