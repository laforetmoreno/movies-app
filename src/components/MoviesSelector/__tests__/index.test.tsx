import React from "react";
import Link from "../Link.react";
import renderer from "react-test-renderer";

import MoviesSelector from "../index";

it("renders correctly", () => {
  const defaultProps = {
    className: "",
    onChange: () => {},
    history: {},
    options: []
  };

  const tree = renderer.create(<MoviesSelector {...defaultProps} />).toJSON();
  expect(tree).toMatchSnapshot();
});
