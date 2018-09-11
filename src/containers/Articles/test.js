import React from 'react';
import { shallow } from 'enzyme';
import Articles from '.';
import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";

const mockStore = configureMockStore();
const store = mockStore({
  articles: {
    isFetching: true,
    list: [
      {
        title: 'Hello'
      },
      {
        title: 'Ooops'
      }
    ]
  }
});

it('renders correctly', () => {
  const wrapper = shallow(
    <Provider store={store}>
      <Articles />
    </Provider>
  );
  expect(wrapper).toMatchSnapshot();
});