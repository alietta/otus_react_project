import React, { FC, useEffect } from "react";
import { useTheme, Container, Text, IconLogOut } from "sancho";
import { useSelector, useDispatch } from "react-redux";
import { getUsers } from "../../duck/actions";

const UsersList: FC = () => {
  const dispatch = useDispatch();
  const users = useSelector((state: any) => state.users.users)
  const status = useSelector((state: any) => state.users.status)

  useEffect(() => {
    dispatch(getUsers())
  }, [])
  return (
    <Text>
      { status === "success" && users.map((user: any) => {
        return <p key={user.name}>{user.name}</p>
      }) }
      { status === "loading"  && <p>LOADING.....</p>}
    </Text>
  )
};
export { UsersList };
