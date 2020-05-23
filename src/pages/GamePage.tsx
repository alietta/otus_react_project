import React, { FC } from "react";
import { WithNavigationLayout } from "@/layouts/WithNavigationLayout";
import { Game } from "components/Game";

export const GamePage: FC = () => {
  return (
    <WithNavigationLayout>
      <div
        css={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
        }}
      >
        <Game />
      </div>
    </WithNavigationLayout>
  );
};
