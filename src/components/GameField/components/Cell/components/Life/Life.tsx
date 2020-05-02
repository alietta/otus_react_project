import React, { FunctionComponent, useState, useEffect } from "react";
import { LifeWrapper } from "./LifeItems";

interface LifeProps {
  color: string;
  willUnmount: boolean;
}

const Life: FunctionComponent<LifeProps> = (props) => {
  const { color, willUnmount } = props;
  const [show, setShow] = useState<boolean>(false);
  useEffect(() => {
    setTimeout(() => setShow(true), 100);
  }, []);

  useEffect(() => {
    if (willUnmount) {
      setShow(false);
    }
  }, [willUnmount]);

  return <LifeWrapper color={color} show={show}></LifeWrapper>;
};

Life.defaultProps = {
  color: "black",
  willUnmount: false,
};
export { Life };
