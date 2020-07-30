import React, { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";
import { actions } from "../../duck/reducer";

const Photos: FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(window.location.search)
    dispatch(actions.getToken());
  }, []);
  return (
    <div>
      <Query
        query={gql`
          {
            photos {
              url
              author
            }
          }
        `}
      >
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error</p>;
          return data.photos.map((photo) => (
            <img src={photo.url} alt={photo.author} />
          ));
        }}
      </Query>
    </div>
  );
};
export { Photos };
