import { userSlice } from "./reducer";
import axios from "axios";

export const getUsers =() => {
  return (dispatch: any) => {
    dispatch(userSlice.actions.getUsersLoading());
    axios.get('https://api.allorigins.win/raw?url=https://swapi.dev/api/people/')
      .then((response) => {
        dispatch(userSlice.actions.getUsersSuccess(response.data.results))
      })
      .catch(() => {
        dispatch(userSlice.actions.getUsersError());
      })
  }
}

