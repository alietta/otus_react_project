import React, { FC, useEffect } from "react";
import { Text, Button } from "sancho";
import { useSelector, useDispatch } from "react-redux";
import { getUsers, incrementCounter } from "../../duck/actions";

const UsersList: FC = () => {
  const dispatch = useDispatch();
  const users = useSelector((state: any) => state.users.users);
  const status = useSelector((state: any) => state.users.status);
  const counter = useSelector((state: any) => state.counter);

  const increment = () => {
    dispatch(incrementCounter(0.5));
  };

  useEffect(() => {
    dispatch(getUsers());
  }, []);
  return (
    <div>
      <Button onClick={increment}>Increment with probability 0.5</Button>
      <Text>{counter}</Text>
      <Text>
        {status === "success" &&
          users.map((user: any) => {
            return <p key={user.name}>{user.name}</p>;
          })}
        {status === "loading" && <p>LOADING.....</p>}
      </Text>
    </div>
  );
};
export { UsersList };
