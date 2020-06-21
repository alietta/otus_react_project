import { getUsers } from "./actions";
import axios from "axios";

jest.mock("axios");

const data = {
  data: {
    results: [],
  },
};

describe("actions", () => {
  describe("getUsers", () => {
    it("dispatch with loading", () => {
      axios.get.mockImplementationOnce(() => Promise.resolve(data));
      const dispatch = jest.fn();

      const thunk = getUsers();
      thunk(dispatch);
      expect(dispatch).toBeCalledTimes(1);
      expect(dispatch).toBeCalledWith({ type: "users/getUsersLoading" });
    });
    it("dispatch with success and users data", async () => {
      axios.get.mockImplementationOnce(() => Promise.resolve(data));
      const dispatch = jest.fn();

      const thunk = getUsers();
      await thunk(dispatch);
      expect(dispatch).toBeCalledTimes(2);
      expect(dispatch.mock.calls[0][0]).toEqual({
        type: "users/getUsersLoading",
      });
      expect(dispatch.mock.calls[1][0]).toEqual({
        type: "users/getUsersSuccess",
        payload: [],
      });
    });
    it("dispatch with error", async () => {
      axios.get.mockImplementationOnce(() => Promise.resolve({}));
      const dispatch = jest.fn();

      const thunk = getUsers();
      await thunk(dispatch);
      await new Promise((resolve) => setTimeout(resolve, 10));
      expect(dispatch).toBeCalledTimes(2);
      expect(dispatch.mock.calls[0][0]).toEqual({
        type: "users/getUsersLoading",
      });
      expect(dispatch.mock.calls[1][0]).toEqual({
        type: "users/getUsersError",
      });
    });
  });
});
