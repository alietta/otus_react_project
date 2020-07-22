export const checkNeighbor = (field: boolean[][], x: number, y: number) => {
  const rules = [
    [x - 1, y + 1],
    [x, y + 1],
    [x + 1, y + 1],
    [x - 1, y],
    [x + 1, y],
    [x - 1, y - 1],
    [x, y - 1],
    [x + 1, y - 1],
  ];
  const width = field[0].length;
  const height = field.length;
  const neighbor = rules.filter(([xRule, yRule]: [number, number]) => {
    const ruleInField =
      yRule >= 0 && xRule >= 0 && xRule < width && yRule < height;
    return ruleInField && field[yRule][xRule];
  });
  return neighbor.length;
};

export const getGeneration = (field: boolean[][]): boolean[][] => {
  return field.map((row: boolean[], y: number) => {
    return row.map((life: boolean, x: number) => {
      const neighbor = checkNeighbor(field, x, y);
      return life ? neighbor < 4 && neighbor > 1 : neighbor === 3;
    });
  });
};
