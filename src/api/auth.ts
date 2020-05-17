import { delay } from "@/utils/delay";

export const login = async (name: string): void => {
  await delay(1000);

  await localStorage.setItem("login", name);
};

export const logout = async (): void => {
  await delay(1000);

  await localStorage.removeItem("login");
};

export const isLoggedIn = (): boolean => {
  const login = localStorage.getItem("login");
  return Boolean(login);
};
