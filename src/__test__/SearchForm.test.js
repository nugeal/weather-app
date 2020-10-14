import React from 'react';
import { mount } from 'enzyme';
import SearchForm from '../components/SearchForm';

let wrapper;

describe('SearchForm tests', () => {
    beforeEach(() => {
        wrapper = mount(<SearchForm getWeatherData={ () => {} }/>);
    });
      
    it('zipcode input field should handle text entry', () => {
        wrapper.find('Input').childAt(0).childAt(0).simulate('change', { target: { name: 'zipcode', value: '90210' } });
        expect(wrapper.find('Input').childAt(0).childAt(0).prop('value')).toEqual('90210');
    });
    
    it('units input field value should default to imperial', () => {
        expect(wrapper.find('Select').childAt(0).prop('value')).toEqual('imperial');
    });
    
    it('units input field should handle option change to metric', () => {
        wrapper.find('div#unitsField').childAt(2).childAt(0).childAt(1).simulate('click');
        expect(wrapper.find('Select').prop('value')).toEqual('metric');
    });
    
    it('Get Weather button should be disabled by default', () => {
        expect(wrapper.find('Button').prop('disabled')).toBe(true);
    });
    
    it('Get Weather button should be enabled when a valid zipcode is entered', () => {
        wrapper.find('Input').childAt(0).childAt(0).simulate('change', { target: { name: 'zipcode', value: '90210' } });
        expect(wrapper.find('Button').prop('disabled')).toBe(false);
        wrapper.find('Form').childAt(0).simulate('submit');
    });

    it('Zipcode text field should be in an error state when an invalid zipcode is entered', () => {
        wrapper.find('Input').childAt(0).childAt(0).simulate('change', { target: { name: 'zipcode', value: '902' } });
        expect(wrapper.find('Button').prop('disabled')).toBe(true);
        expect(wrapper.find('FormField').at(0).prop('error')).toBe(true);
    });
})
