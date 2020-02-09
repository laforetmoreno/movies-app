import React from 'react';
import renderer from 'react-test-renderer';

import CitiesSelector from '../index';

it('renders correctly', () => {
  const defaultProps = {
    onChange: () => ({}),
    className: '',
    history: {},
    city: {},
  };

  const tree = renderer.create(<CitiesSelector {...defaultProps} />).toJSON();
  expect(tree).toMatchSnapshot();
});
