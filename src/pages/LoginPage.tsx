import React, { FC } from "react";
import { Login } from "@/features/login";
import { WithoutNavigationLayout } from "@/layouts/WithoutNavigationLayout";

export const LoginPage: FC = () => {
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
        <Login />
      </div>
    </WithoutNavigationLayout>
  );
};
