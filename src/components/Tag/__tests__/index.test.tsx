import React from 'react';
import renderer from 'react-test-renderer';

import Tag from '../index';

it('renders correctly', () => {
  const defaultProps = {
    tag: '',
  };

  const tree = renderer.create(<Tag {...defaultProps} />).toJSON();
  expect(tree).toMatchSnapshot();
});
