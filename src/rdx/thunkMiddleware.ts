import { Middleware } from "redux";

export const thunkMiddleware: Middleware = ({ dispatch, getState }) => (
  next
) => (action) => {
  if (typeof action === "function") {
    return action(dispatch, getState);
  }

  return next(action);
};
