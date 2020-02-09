import React from "react";
import Link from "../Link.react";
import renderer from "react-test-renderer";

import MovieListItem from "../index";

it("renders correctly", () => {
  const defaultProps = {
    movie: {
      trailers: [""],
      images: [""],
      tags: [""]
    }
  };
  const tree = renderer.create(<MovieListItem {...defaultProps} />).toJSON();
  expect(tree).toMatchSnapshot();
});
