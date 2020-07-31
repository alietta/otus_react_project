import React, { FC, useEffect, MouseEvent } from "react";
import { Layer, Text } from "sancho";

interface Props {
  caption: string;
  permalink: string;
  media_url: string;
}

const Post: FC<Props> = ({ caption, permalink, media_url }) => {
  return (
    <Layer
      css={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: 320,
        padding: "0 10px",
        marginBottom: 15,
      }}
    >
      <Text variant="h4" css={{ marginBottom: 10 }}>
        {caption}
      </Text>
      <a href={permalink} target="blank">
        <img css={{ width: 300, height: 300 }} src={media_url} alt={caption} />
      </a>
    </Layer>
  );
};
export { Post };
