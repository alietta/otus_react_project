import { delay } from "@/utils/delay";

export const login = async (name: string): void => {
  await delay(1000);

  await localStorage.setItem("login", name);
};

export const logout = async (): void => {
  await delay(1000);

  await localStorage.removeItem("login");
};

export const getUserName = (): string => {
  return localStorage.getItem("login");
};
export const isLoggedIn = async (): boolean => {
  await delay(1000);
  const login = localStorage.getItem("login");
  return Boolean(login);
};
