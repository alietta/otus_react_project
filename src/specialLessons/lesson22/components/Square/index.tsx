import React, { FC } from "react";
import { Spinner, Text, Button } from "sancho";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "../../duck/reducer";

const Square: FC = () => {
  const dispatch = useDispatch();
  const color = useSelector((state: any) => state.square.color);
  const status = useSelector((state: any) => state.square.status);

  const onClick = () => {
    dispatch(actions.colors());
  };

  return (
    <div>
      <Button onClick={onClick}>Random color</Button>
      <Text>it will be square</Text>
      <div
        name="square"
        css={{
          width: 200,
          height: 200,
          background: `#${color}`,
        }}
      >
        {status === "loading" && <Spinner center />}
      </div>
    </div>
  );
};
export { Square };
