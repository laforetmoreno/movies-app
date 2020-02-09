import React from "react";
import Link from "../Link.react";
import renderer from "react-test-renderer";

import MoviesList from "../index";

it("renders correctly", () => {
  const defaultProps = {
    movies: []
  };

  const tree = renderer.create(<MoviesList {...defaultProps} />).toJSON();
  expect(tree).toMatchSnapshot();
});
