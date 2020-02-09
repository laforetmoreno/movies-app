import React from "react";
import Link from "../Link.react";
import renderer from "react-test-renderer";

import TagList from "../index";

it("renders correctly", () => {
  const defaultProps = {
    tags: []
  };

  const tree = renderer.create(<TagList {...defaultProps} />).toJSON();
  expect(tree).toMatchSnapshot();
});
