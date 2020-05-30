import {
  compose,
  sort,
  prop,
  descend,
  toPairs,
  map,
  join,
  slice,
  tail,
  split,
  reduce,
  //...
} from "ramda";

// Задание 1
export type Team = { name: string; score: number };
const getFirstName = (teams: Array<Team>): string =>
  teams.length > 0 ? teams[0].name : "";

const byScore = descend(prop("score"));
export const getTopName = compose(getFirstName, sort(byScore));

// Задание 2
export type QsObj = Record<string, string | number | boolean | object>;

const toQuery = (pairs: Array<string | number>): string =>
  `${pairs[0]}=${pairs[1]}&`;

const addSign = (line: string): string => `?${line}`;

export const createQs = compose(
  slice(0, -1),
  addSign,
  join(""),
  map(toQuery),
  toPairs
);

// Задание 3
const toObj = (acc: QsObj, item: Array<string>) => {
  const [key, value] = item;
  return { ...acc, [key]: value };
};
export const parseQs = compose(
  reduce(toObj, {}),
  map(split("=")),
  split("&"),
  tail
);
