import { probabilityMiddleware } from "./probabilityMiddleware";
const create = () => {
  const store = {
    getState: jest.fn(() => ({})),
    dispatch: jest.fn(),
  };
  const next = jest.fn();

  const invoke = (action) => probabilityMiddleware()(next)(action);

  return { store, next, invoke };
};
describe("probabiliry middleware", () => {
  it("call action with 100% probability", () => {
    const { next, invoke } = create();
    const action = { type: "TEST", meta: { probability: 1 } };
    invoke(action);
    expect(next).toHaveBeenCalledWith(action);
  });

  it("not call action if probability is 0", () => {
    const { next, invoke } = create();
    const action = { type: "TEST", meta: { probability: 0 } };
    invoke(action);
    expect(next).not.toHaveBeenCalled();
  });
});
