import React from 'react';
import { shallow } from 'enzyme';
import App from '../components/App';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<App />);
});

it('renders without crashing', () => {
  wrapper;
});

it('renders the page header', () => {
  expect(wrapper.exists('Header')).toEqual(true);
});

it('renders the SearchForm component', () => {
  expect(wrapper.exists('SearchForm')).toEqual(true);
});
