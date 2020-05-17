import React from "react";
import { shallow, mount } from "enzyme";
import { Headbar } from "./Headbar";

describe("Headbar", () => {
  it("renders Headbar", () => {
    const onLogout = jest.fn();
    const element = mount(<Headbar name="Name" onLogout={onLogout} />);
    expect(element).toMatchSnapshot();
  });
  it("should call logout from props", () => {
    const onLogout = jest.fn();
    const element = shallow(<Headbar name="Name" onLogout={onLogout} />);
    element.find(".logout-icon").simulate("click");
    expect(onLogout).toHaveBeenCalled();
    expect(localStorage.__STORE__).toEqual({});
  });
});
