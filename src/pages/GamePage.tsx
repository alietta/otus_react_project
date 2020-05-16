import React, { FC } from "react";
import { useTheme, Container } from "sancho";
import { Game } from "components/Game";
import { login } from "@/api/auth";
import { pageWithNavigation } from "@/utils/HOC/pageWithNavigation";

const Page: FC = () => {
  return (
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
  );
};

export const GamePage = pageWithNavigation(Page);
