import React from 'react';
import { shallow } from 'enzyme';
import Pager from '.';

it('renders correctly', () => {
  const wrapper = shallow(
      <Pager page={0} pages={10}/>
  );
  expect(wrapper).toMatchSnapshot();
});

it('renders correctly on last page', () => {
  const wrapper = shallow(
      <Pager page={9} pages={10}/>
  );
  expect(wrapper).toMatchSnapshot();
});