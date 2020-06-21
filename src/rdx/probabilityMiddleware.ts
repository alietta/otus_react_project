import { Middleware } from "redux";

export const probabilityMiddleware: Middleware = () => (next) => (action) => {
  if (
    "meta" in action &&
    "probability" in action.meta &&
    typeof action.meta.probability === "number"
  ) {
    if (
      Boolean(action.meta.probability) &&
      Math.random() <= action.meta.probability
    ) {
      return next(action);
    }
  } else {
    return next(action);
  }
};
