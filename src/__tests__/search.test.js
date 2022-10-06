import React from "react";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import store from "../redux/Store";
import Search from "../components/search";
it("renders Component correctly", () => {
  const tree = renderer.create(
    <Provider store={store}>
      <Search />
    </Provider>
  );
  expect(tree).toMatchSnapshot();
});
