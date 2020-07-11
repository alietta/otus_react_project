import axios from "axios";
export const getColors = () => {
  return axios.get(
    "https://api.allorigins.win/raw?url=http://www.colr.org/json/color/random"
  );
};
