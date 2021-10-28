import React from "react";
import { shallow, mount } from "enzyme";
import Timer from "./timer";
import TimerButton from "../timerButton/timerButton";
describe("Timer", () => {
  let container: any;

  beforeEach(() => (container = shallow(<Timer />)));

  it("should render a <div />", () => {
    expect(container.find("div").length).toBeGreaterThanOrEqual(1);
  });
  it("should render a <h1 />", () => {
    expect(container.find("h1").length).toEqual(3);
  });
  it("should render instances of the TimerButton component", () => {
    expect(container.find("TimerButton").length).toEqual(3);
  });
});
