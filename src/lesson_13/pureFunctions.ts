// Задание 1
export type Team = { name: string; score: number };

export const getTopName = (teams: Team[]): string => {
  return teams.reduce(
    (topTeam: Team, team) => {
      if (team.score > topTeam.score) {
        topTeam = team;
      }
      return topTeam;
    },
    { name: "", score: 0 }
  ).name;
};

// Задание 2
export type QsObj = Record<string, string | number | boolean | object>;

export const createQs = (qsObj: QsObj): string => {
  const keys = Object.keys(qsObj);
  return keys
    .reduce((row: string, key: string) => {
      return `${row}${key}=${qsObj[key]}&`;
    }, "?")
    .slice(0, -1);
};

// Задание 3

export const parseQs = (qs: string): QsObj => {
  const queries = qs.slice(1).split("&");
  const result = queries.reduce((qsObj: QsObj, query: string) => {
    const [key, value] = query.split("=");
    return { ...qsObj, [key]: value };
  }, {});
  return result;
};
