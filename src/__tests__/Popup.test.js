import React from "react";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import store from "../redux/Store";
import Popup from "../components/Popup"
it("renders Component correctly", () => {
  const tree = renderer.create(
    <Provider store={store}>
      <Popup />
    </Provider>
  );
  expect(tree).toMatchSnapshot();
});
