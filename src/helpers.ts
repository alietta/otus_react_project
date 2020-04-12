export const declOfNum = (num: number, titles: Array<string>): string => {
  const cases: Array<number> = [2, 0, 1, 1, 1, 2];
  const hundreds: number = num % 100;
  const dozens: number = num % 10;
  let numCase: number = cases[5];
  if (hundreds > 4 && hundreds < 20) {
    numCase = 2;
  } else if (dozens < 5) {
    numCase = cases[dozens];
  }
  return titles[numCase];
};
