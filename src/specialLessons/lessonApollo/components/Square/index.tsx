import React, { FC, useEffect, MouseEvent } from "react";
import { useDispatch } from "react-redux";
import { Query, useQuery } from "react-apollo";
import { gql } from "apollo-boost";
import { Layer, IconFastForward, IconRewind, Button } from "sancho";
import { actions } from "../../duck/reducer";

const Photos: FC = () => {
  const dispatch = useDispatch();
  const token =
    "IGQVJXQ05OMS1VXzBaRWMtcDI5Wi1oRm0yN05raTB4MktBcHpjdGhIWEozb3k3WExZASXBzb3V6cnlkQTQ4SllZAcE1OdjZAxOURuelJ4MFFYRWg4NC1fWXEwUXo2RjgwYjNmNjBoVG5vMVNCVU85czFSNk5CNG05QWFUVGlr";
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
    dispatch(actions.getToken());
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
            <Layer>
              <img
                css={{ width: 300, height: 300 }}
                src={post.media_url}
                alt={post.caption}
              />
            </Layer>
          ))}
          {data.user.mediaCount !== data.media.posts.length && (
            <Button variant="ghost" onClick={onButtonClick}>
              Add more
            </Button>
          )}
        </div>
      )}
    </div>
  );
};
export { Photos };
