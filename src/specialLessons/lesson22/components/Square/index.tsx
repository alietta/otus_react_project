import React, { FC, useEffect } from "react";
import { useTheme, Container, Text, Button } from "sancho";
import { useSelector, useDispatch } from "react-redux";
import { getUsers, incrementCounter } from "../../duck/actions";

const Square: FC = () => {
  return (
    <div>
      <Button onClick={() => {}}>Random color</Button>
      <Text>it will be square</Text>
    </div>
  );
};
export { Square };
