import React, { FC } from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";

const Photos: FC = () => {
  console.log(window.location);
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
