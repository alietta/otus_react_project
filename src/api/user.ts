export const getUserName = (): string => {
  return localStorage.getItem("login");
};
