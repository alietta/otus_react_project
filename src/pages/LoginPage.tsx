import React, { FC, useCallback } from "react";
import { EnterForm } from "components/EnterForm";
import { login } from "@/api/auth";
import { WithoutNavigationLayout } from '@/layouts/WithoutNavigationLayout'

export const LoginPage: FC = (props) => {
  const onSubmit = useCallback(async (data: { name: string }) => {
    await login(data.name);
    props.setStore({ name: data.name, isAuth: true });
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

