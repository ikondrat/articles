import React from 'react';
import { shallow } from 'enzyme';
import Articles from './';

it('renders correctly', () => {
  const wrapper = shallow(
    <Articles 
      title="test title"
      isFetching={true}
    />
  );
  expect(wrapper).toMatchSnapshot();
});

it('renders correctly with list', () => {
  const mockfetchArticles = jest.fn();
  const mockfetchMore = jest.fn();
  const wrapper = shallow(
    <Articles 
      title="test title"
      isFetching={false}
      page={0}
      pages={10}
      fetchArticles={mockfetchArticles}
      fetchMore={mockfetchMore}
      list={[
        {
          title: "Title1",
          objectID: "123"
        },
        {
          title: "Title2",
          objectID: "124"
        }
      ]}
    />
  );
  expect(wrapper).toMatchSnapshot();
});