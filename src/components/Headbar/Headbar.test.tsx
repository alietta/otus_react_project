import React from "react";
import { mount } from "enzyme";
import { Headbar } from "./Headbar";
import { AppContext } from "@/AppContext";

const onLogout = jest.fn();
const element = mount(<Headbar onLogout={onLogout} />, {
  wrappingComponent: AppContext.Provider,
  wrappingComponentProps: {
    value: [{ isAuth: true, loader: false, name: "NNN" }],
  },
});

describe("Headbar", () => {
  it("renders Headbar", () => {
    expect(element).toMatchSnapshot();
  });
  it("should call logout from props", () => {
    element.find(".logout-icon").first().simulate("click");
    expect(onLogout).toHaveBeenCalled();
  });
});
