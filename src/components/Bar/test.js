import React from 'react';
import { shallow } from 'enzyme';
import Bar from './';

it('renders correctly', () => {
  const mockCallBack = jest.fn();
  const wrapper = shallow(
    <Bar 
      title="test title"
      onChange={mockCallBack}
    />
  );
  expect(wrapper).toMatchSnapshot();
});