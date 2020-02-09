import React from "react";
import Link from "../Link.react";
import renderer from "react-test-renderer";

import Loader from "../index";

it("renders correctly", () => {
  const defaultProps = {
    size: 1,
    weight: 1,
    color: "",
    minHeight: true
  };

  const tree = renderer.create(<Loader {...defaultProps} />).toJSON();
  expect(tree).toMatchSnapshot();
});
