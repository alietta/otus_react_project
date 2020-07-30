import React, { FC, useEffect } from "react";

export const LessonApolloAuth: FC = () => {
  useEffect(() => {
    window.location.href = `https://api.instagram.com/oauth/authorize?client_id=1351887201675738&redirect_uri=https://alietta.github.io/lesson_apollo&scope=user_profile,user_media&response_type=code`;
  }, []);
  return null;
};
