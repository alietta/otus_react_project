import React, { FC, useEffect } from "react";
import { Spinner, Text, Button } from "sancho";
import { useSelector, useDispatch } from "react-redux";
import { colors } from "../../duck/reducer";

const Square: FC = () => {
  const dispatch = useDispatch();
  const color = useSelector((state: any) => state.square.color);
  const status = useSelector((state: any) => state.square.status);

  const onClick = () => {
    dispatch(colors());
  };

  return (
    <div>
      <Button onClick={onClick}>Random color</Button>
      <Text>it will be square</Text>
      <div css={{ width: 200, height: 200, background: color }}>
        {status === "loading" && <Spinner />}
      </div>
    </div>
  );
};
export { Square };
