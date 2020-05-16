import React, { FC } from "react";
import { useTheme, Container } from "sancho";
import { EnterForm } from "components/EnterForm";
import { login } from "@/api/auth";
import { pageWithoutNavigation } from "@/utils/HOC/pageWithoutNavigation";

const Page: FC = () => {
  const onSubmit = (data: { name: string }): void => {
    login(data.name);
  };
  return (
    <div
      css={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
      }}
    >
      <EnterForm onSubmit={onSubmit} />
    </div>
  );
};

export const LoginPage = pageWithoutNavigation(Page);
