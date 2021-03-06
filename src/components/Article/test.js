import React from 'react';
import { shallow } from 'enzyme';
import Article from './';

it('renders correctly', () => {
  const wrapper = shallow(
    <Article 
      title="test title"
      isFetching={true}
    />
  );
  expect(wrapper).toMatchSnapshot();
});

it('renders correctly', () => {
  const wrapper = shallow(
    <Article 
      title="test title"
      isFetching={false}
    />
  );
  expect(wrapper).toMatchSnapshot();
});