export const delay = (x: number): Promise =>
  new Promise((res) => setTimeout(res, x));
