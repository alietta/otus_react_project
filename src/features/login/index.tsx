import React, { FC, useEffect, useCallback, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { EnterForm } from "./components/EnterForm";
import { useHistory } from "react-router-dom";
import { userSlice } from "./duck/reducer";

export const Login: FC = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state: any) => state.user.isAuth);
  const history = useHistory();

  useEffect(() => {
    if (isAuth) {
      const lastRoute = history.location.state
        ? history.location.state.from
        : null;
      const path = lastRoute ? lastRoute.pathname : "/";
      history.push(path);
    }
  }, [isAuth]);

  const onSubmit = useCallback((data: { name: string }) => {
    dispatch(userSlice.actions.loginSuccess(data.name));
  }, []);

  return (
    <EnterForm onSubmit={onSubmit} />
  );
};

