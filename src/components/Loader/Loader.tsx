import React, { FC } from "react";
import { useTheme, Spinner } from "sancho";

const Loader: FC<> = () => {
  const theme = useTheme();
  return (
    <div
      css={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: theme.colors.background.tint1,
      }}
    >
      <Spinner />
    </div>
  );
};
export { Loader };
