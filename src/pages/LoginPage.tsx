import React, { FC, useEffect, useCallback, useContext } from "react";
import { EnterForm } from "components/EnterForm";
import { login } from "@/api/auth";
import { WithoutNavigationLayout } from "@/layouts/WithoutNavigationLayout";
import { AppContext } from "@/AppContext";
import { useHistory } from "react-router-dom";

export const LoginPage: FC = (props) => {
  const [{ isAuth }, dispatch] = useContext(AppContext);
  const history = useHistory();

  useEffect(() => {
    if (isAuth) {
      const lastRoute = history.location.state ? history.location.state.from : null;
      const path = lastRoute ? lastRoute.pathname : "/";
      history.push(path);
    }
  }, [isAuth])

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
