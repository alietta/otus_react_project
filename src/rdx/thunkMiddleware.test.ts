import { thunkMiddleware } from "./thunkMiddleware";
const create = () => {
  const store = {
    getState: jest.fn(() => ({})),
    dispatch: jest.fn(),
  };
  const next = jest.fn();

  const invoke = (action) => thunkMiddleware(store)(next)(action);

  return { store, next, invoke };
};
describe("thunk middleware", () => {
  it("passes through non-function action", () => {
    const { next, invoke } = create();
    const action = { type: "TEST" };
    invoke(action);
    expect(next).toHaveBeenCalledWith(action);
  });

  it("calls the function", () => {
    const { invoke } = create();
    const fn = jest.fn();
    invoke(fn);
    expect(fn).toHaveBeenCalled();
  });

  it("passes dispatch and getState", () => {
    const { store, invoke } = create();
    invoke((dispatch, getState) => {
      dispatch("TEST DISPATCH");
      getState();
    });
    expect(store.dispatch).toHaveBeenCalledWith("TEST DISPATCH");
    expect(store.getState).toHaveBeenCalled();
  });
});
