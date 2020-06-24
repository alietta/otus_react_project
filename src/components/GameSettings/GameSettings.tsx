import React, { FC } from "react";
import { useTheme, Layer, Text, Button } from "sancho";
import { SizeForm } from "@/components/SizeForm";
import { PercentFilled } from "@/components/PercentFilled";

interface GameSettingsProps {
  size: { min: number; max: number };
  passSize: () => void;
  passCellSize: () => void;
  changePercent: () => void;
  startGame: () => void;
}

const GameSettings: FC<GameSettingsProps> = ({
  size = { min: 3, max: 10 },
  passSize,
  passCellSize,
  changePercent,
  startGame,
}) => {
  const theme = useTheme();

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
      <PercentFilled onSubmit={changePercent} />
      <Button
        style={{
          marginTop: theme.spaces.lg,
        }}
        size="lg"
        type="button"
        intent="primary"
        onClick={startGame}
      >
        Start Game
      </Button>
    </Layer>
  );
};

export { GameSettings };
