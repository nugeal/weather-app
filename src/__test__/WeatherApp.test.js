import React from 'react';
import { shallow } from 'enzyme';
import WeatherApp from '../components/WeatherApp';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<WeatherApp />);
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

it('does not render any DayForecast components if state.current is undefined', () => {
  expect(wrapper.exists('DayForecast')).toEqual(false);
});
