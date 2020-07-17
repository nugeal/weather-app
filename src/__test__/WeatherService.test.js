import React from 'react';
import requestWeatherData from '../services/WeatherService';
import axios from 'axios';

describe('WeatherService tests', () => {
      
    it('Api call success', async () => {
        const expectedData = {
            data: {
                current: {},
                forecast: {}
            }
        }
        axios.get = jest.fn(() => Promise.resolve({data: { current: {}, forecast: {} } }));
        let returnedData = await requestWeatherData({ units: "units", zipcode: "zip" });
        expect(returnedData).toEqual(expectedData);
        expect(axios.get).toHaveBeenCalledTimes(1);
        axios.get.mockClear();
    });
})