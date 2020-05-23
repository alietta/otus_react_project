import React, { FC, useCallback, useContext } from "react";
import { EnterForm } from "components/EnterForm";
import { login } from "@/api/auth";
import { WithoutNavigationLayout } from "@/layouts/WithoutNavigationLayout";
import { AppContext } from "@/AppContext";
import { useHistory } from "react-router-dom";

export const LoginPage: FC = (props) => {
  const [, dispatch] = useContext(AppContext);
  const history = useHistory();
  const onSubmit = useCallback(async (data: { name: string }) => {
    await login(data.name);
    dispatch({ type: "LOGIN", payload: data.name });
    const lastRoute = history.location.state.from;
    const path = lastRoute ? lastRoute.pathname : "/";
    history.push(path);
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
