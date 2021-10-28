import React from "react"
import { shallow } from "enzyme"
import TimerButton from './timerButton'

describe("TimerButton", () => {
  let container:any

  beforeEach(() => {
    container = shallow(
      <TimerButton
        buttonAction={jest.fn()}
        buttonValue={""}
      />
    )
  })

  it("should render a <div />", () => {
    expect(container.find("div").length).toBeGreaterThanOrEqual(1)
  })
  it("should render a <button />", () => {
    expect(container.find("button").length).toBeGreaterThanOrEqual(1)
  })
})