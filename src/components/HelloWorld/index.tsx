import React, { FunctionComponent } from "react";

interface HelloWorldProps {
  name?: string;
}

const HelloWorld: FunctionComponent<HelloWorldProps> = (
  props: HelloWorldProps
) => {
  return <div>Hello World{props.name && `, ${props.name}`}</div>;
};

export default HelloWorld;
