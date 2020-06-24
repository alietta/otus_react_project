export const preatyArray = (
  arr: Array<T>,
  length: number,
  filler: T
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
export const makeFieldPos = (data: {
  cell: number;
  width: number;
}): { x: number; y: number } => {
  const { cell, width } = data;
  const line = Math.trunc(cell / width);
  return {
    y: line,
    x: cell - line * width,
  };
};
export const randomByPercent = (
  x: number,
  y: number,
  percent: number
): number[] => {
  const volume = x * y;
  const filled: Array<number> = [];
  const percentCount = Math.round((percent * volume) / 100);
  while (filled.length !== percentCount) {
    const cell = randomIntWithoutRepeat(volume, filled);
    filled.push(cell);
  }
  return filled;
};

export const makeField = (
  x: number,
  y: number,
  filled: number[]
): boolean[][] => {
  const filledArray = Array(y)
    .fill(false)
    .map(() => Array(x).fill(false));
  filled.forEach((cell) => {
    const pos = makeFieldPos({ cell, width: x });
    filledArray[pos.y][pos.x] = true;
  });
  return filledArray;
};
