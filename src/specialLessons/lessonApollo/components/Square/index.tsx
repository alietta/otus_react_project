import React, { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Query, useQuery } from "react-apollo";
import { gql } from "apollo-boost";
import { actions } from "../../duck/reducer";

const Photos: FC = () => {
  const dispatch = useDispatch();
  const GET_MEDIA = gql`
    query GetMedia($token: String!) {
      user(token: $token) {
        name
      }
      media(token: $token) {
        caption
        media_url
      }
    }
  `;
  const { loading, error, data } = useQuery(GET_MEDIA, {
    variables: {
      token:
        "IGQVJYVU5aRzRJNENPMkhQV1ZAqd29wMHZA4V3NYQVk5c0ZAJNlkxQjdQblNpR2stWHA4Sk9pdU5DZA0VaUHVnYl9ZAN1pjNjF1Ny01ckRrSkFhTnRRcHhveUI3V1o0dXRGNlNFc1oxelhUQU1NWE9PTURiUklRNVVVODR6cGNN",
    },
  });

  useEffect(() => {
    dispatch(actions.getToken());
  }, []);
  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error</p>}
      {data &&
        data.media.map((media) => (
          <img src={media.media_url} alt={media.caption} />
        ))}
    </div>
  );
};
export { Photos };
