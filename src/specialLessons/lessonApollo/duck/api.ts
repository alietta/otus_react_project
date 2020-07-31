import axios from "axios-jsonp-pro";
import queryString from "query-string";
export const getToken = (code: string) => {
  const data = {
    client_id: "1351887201675738",
    client_secret: "77afc4751d2051755519d7af1c711900",
    grant_type: "authorization_code",
    redirect_uri: "https://otus-react-project.glitch.me/lesson_apollo",
    code,
  };

  const url = "https://api.instagram.com/oauth/access_token";
  return axios({
    method: "post",
    url,
    data: queryString.stringify(data),
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
};
