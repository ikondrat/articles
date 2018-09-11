import React from 'react';
import { shallow } from 'enzyme';
import Home from '.';
import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";

const mockStore = configureMockStore();
const store = mockStore({
  article: {
    isFetching: true,
    articleDetails: {
      title: "Super title"
    }
  }
});

it('renders correctly', () => {
  const wrapper = shallow(
    <Provider store={store}>
      <Home />
    </Provider>
  );
  expect(wrapper).toMatchSnapshot();
});