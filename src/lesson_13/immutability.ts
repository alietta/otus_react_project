// Задание 1
export type OriginalTeam = {
  size: number;
  name: string;
  league: string;
};

export type ExpectedTeam = {
  name: string;
  league: string;
  roster: number;
};

export const originalTeamToExpectedTeam = (
  originalTeam: OriginalTeam
): ExpectedTeam => {
  const changes = { name: "New York Badgers", roster: 25 };
  const result = { ...originalTeam, ...changes }
  delete result.size;
  return result;
};

// Задание 2
type SomeArray = Array<number | string>;

export const originalArrayToExpectedArray = (
  originalArray: SomeArray
): SomeArray => {
  const copy = [...originalArray];
  copy.splice(0, 2, "two");
  copy.push(5);
  return copy;
};

// Задание 3

export type Team = {
  name: string;
  captain: {
    name: string;
    age: number;
  };
};

export const originalTeamToDeepExpectedTeam = (originalTeam: Team): Team => {
  const changes = {
    captain: {
      age: 28,
    },
  };
  const merge = (changes, origin) => {
    const result = Object.keys(origin).reduce((acc, key) => {
      if (origin[key] instanceof Object) {
        acc[key] = merge(changes[key], origin[key]);
      } else {
        acc[key] = changes[key] || origin[key];
      }
      return acc;
    }, {});
    return result;
  };
  return merge(changes, originalTeam);
};
