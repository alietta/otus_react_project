import React, { FC, useCallback, useContext } from "react";
import { EnterForm } from "components/EnterForm";
import { login } from "@/api/auth";
import { WithoutNavigationLayout } from "@/layouts/WithoutNavigationLayout";
import { AppContext } from "@/AppContext";

export const LoginPage: FC = (props) => {
  const [, dispatch] = useContext(AppContext);
  const onSubmit = useCallback(async (data: { name: string }) => {
    await login(data.name);
    dispatch({ type: "LOGIN", payload: data.name });
  }, []);
  return (
    <WithoutNavigationLayout>
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
    </WithoutNavigationLayout>
  );
};
