import React from "react";
import Link from "../Link.react";
import renderer from "react-test-renderer";

import Header from "../index";

it("renders correctly", () => {
  const defaultProps = {
    title: "",
    onChange: () => {},
    subTitle: "",
    movies: [],
    history: {},
    city: {}
  };

  const tree = renderer.create(<Header {...defaultProps} />).toJSON();
  expect(tree).toMatchSnapshot();
});
