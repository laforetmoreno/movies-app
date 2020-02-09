import React from "react";
import Link from "../Link.react";
import renderer from "react-test-renderer";

import SelectorProvider from "../index";

it("renders correctly", () => {
  const defaultProps = {
    placeholder: "",
    onChange: () => {},
    className: "",
    options: [],
    formatOptionLabel: {}
  };

  const tree = renderer.create(<SelectorProvider {...defaultProps} />).toJSON();
  expect(tree).toMatchSnapshot();
});
