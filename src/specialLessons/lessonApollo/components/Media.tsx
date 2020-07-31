import React, { FC, useEffect, MouseEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Query, useQuery } from "react-apollo";
import queryString from "query-string";
import { gql } from "apollo-boost";
import { Button } from "sancho";
import { actions } from "../duck/reducer";
import { Post } from "./Post";

const Media: FC = () => {
  const token = useSelector((state) => state.instagram.token);
  const dispatch = useDispatch();
  const GET_MEDIA = gql`
    query GetMedia($token: String!, $limit: Int, $after: String) {
      user(token: $token) {
        name
        mediaCount
      }
      media(token: $token, after: $after, limit: $limit) {
        posts {
          caption
          media_url
          permalink
          id
        }
        cursor {
          after
          before
        }
      }
    }
  `;
  const { loading, error, data, fetchMore } = useQuery(GET_MEDIA, {
    variables: {
      token,
      after: "",
      limit: 2,
    },
  });

  const onButtonClick = async (e: MouseEvent<HTMLFormElement>) => {
    const variables = { after: data.media.cursor.after, token, limit: 2 };
    await fetchMore({
      variables,
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) return prev;
        const result = Object.assign({}, prev, {
          media: {
            posts: [...prev.media.posts, ...fetchMoreResult.media.posts],
            cursor: fetchMoreResult.media.cursor,
            __typename: "Media",
          },
        });
        return result;
      },
    });
  };

  useEffect(() => {
    const code = queryString.parse(window.location.search).code;
    if (code) {
      dispatch(actions.getToken(code));
    }
  }, []);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error</p>}
      {data && (
        <div
          css={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          {data.media.posts.map((post) => (
            <Post {...post} key={post.id} />
          ))}
          {data.user.mediaCount !== data.media.posts.length && (
            <Button onClick={onButtonClick}>Add more</Button>
          )}
        </div>
      )}
    </div>
  );
};
export { Media };
