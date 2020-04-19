import React, { FunctionComponent } from "react";

type Props = {
  name?: string;
};

const HelloWorld: FunctionComponent<Props> = (props) => {
  return <div>Hello World{props.name && `, ${props.name}`}</div>;
};

export default HelloWorld;
