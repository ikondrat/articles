import React from 'react';
import { shallow } from 'enzyme';
import Progress from '.';

it('renders correctly', () => {
  const wrapper = shallow(
      <Progress/>
  );
  expect(wrapper).toMatchSnapshot();
});