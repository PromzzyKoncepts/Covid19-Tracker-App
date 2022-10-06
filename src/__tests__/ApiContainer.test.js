import React from "react";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import store from "../redux/Store";
import Apicontainer from "../components/ApiContainer";
it("renders Component correctly", () => {
  const tree = renderer.create(
    <Provider store={store}>
      <Apicontainer />
    </Provider>
  );
  expect(tree).toMatchSnapshot();
});
