export const preatyArray = (
  arr: Array<T>,
  length: number,
  filler: any
): Array<T> => {
  let copy = [...arr];
  if (copy.length > length) {
    copy = copy.slice(0, length);
  } else if (copy.length < length) {
    const addition = Array(length - copy.length).fill(filler);
    copy.splice(copy.length - 1, 0, ...addition);
  }
  return copy;
};

export const randomIntWithoutRepeat = (
  max: number,
  arr: Array<number>
): number => {
  const rand = Math.floor(Math.random() * Math.floor(max));
  if (arr.includes(rand)) {
    return randomIntWithoutRepeat(max, arr);
  }
  return rand;
};
export const makeCell = (
  cell: number,
  x: number,
  y: number
): { x: number; y: number } => {
  const line = Math.trunc(cell / x);
  return {
    y: line,
    x: cell - line * x,
  };
};
export const randomByPercent = (
  x: number,
  y: number,
  percent: number
): array => {
  const volume = x * y;
  const filled: Array<number> = [];
  const percentCount = Math.round((percent * volume) / 100);
  while (filled.length !== percentCount) {
    const cell = randomIntWithoutRepeat(volume, filled);
    filled.push(cell);
  }
  const filledArray = Array(y)
    .fill(false)
    .map(() => Array(x).fill(false));
  filled.forEach((cell) => {
    const pos = makeCell(cell, x, y);
    filledArray[pos.y][pos.x] = true;
  });
  return filledArray;
};
