import React from 'react';
import { shallow } from 'enzyme';
import Article from './';
import '../../setupTests';

it('renders without crashing', () => {
  shallow(<Article 
    title="test title"
  />);
});