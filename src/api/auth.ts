import { delay } from '@/utils/delay';

export const login = async (name: string) => {
  await delay(1000);

  await localStorage.setItem("login", name);
};

export const logout = async () => {
  await delay(1000);

  await localStorage.removeItem("login");
};

export const isLoggedIn = async () => {
  await delay(2000);
  const login = await localStorage.getItem("login");
  return Boolean(login);
};
