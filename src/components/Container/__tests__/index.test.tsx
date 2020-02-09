import React from "react";
import Link from "../Link.react";
import renderer from "react-test-renderer";

import Container from "../index";

it("renders correctly", () => {
  const tree = renderer.create(<Container />).toJSON();
  expect(tree).toMatchSnapshot();
});
