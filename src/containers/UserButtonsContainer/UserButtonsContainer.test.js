import React from "react";
import { mount } from "enzyme";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import UserButtonsContainer from "./index.js";
import store from "../../store";
let wrapper = null;

beforeAll(() => {
  wrapper = mount(
    <Provider store={store}>
      <UserButtonsContainer />
    </Provider>
  );
});

describe("Add User Button", () => {
  it("should increase users array length by 1", () => {
    var increaseButton = wrapper.find("button").at(0);
    increaseButton.simulate("click");
    expect(store.getState().currentCount).toBe(
      store.getState().currentCount + 1
    );
  });
});

describe("Remove User Button", () => {
  it("should decrease users array length by 1", () => {
    var decreaseButton = wrapper.find("button").at(1);
    decreaseButton.simulate("click");
    expect(store.getState().currentCount).toBe(
      store.getState().currentCount - 1
    );
  });
});
