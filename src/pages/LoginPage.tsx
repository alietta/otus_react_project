import React, { FC } from "react";
import { EnterForm } from "components/EnterForm";
import { login } from "@/api/auth";
import { pageWithoutNavigation } from "@/utils/HOC/pageWithoutNavigation";

const Page: FC = (props) => {
  const onSubmit = async (data: { name: string }) => {
    await login(data.name);
    props.setStore({ name: data.name, isAuth: true });
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
