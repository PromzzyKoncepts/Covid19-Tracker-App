import React from "react";
import renderer from "react-test-renderer";
import { MemoryRouter as Router } from "react-router-dom";
import App from "../App";
import { Provider } from "react-redux";
import store from "../redux/Store";


it("renders Component correctly", () => {
  const tree = renderer.create(
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  );
  expect(tree).toMatchSnapshot();
});
