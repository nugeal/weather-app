import axios from 'axios';

const requestWeatherData = (values) => {
    const baseUrl = 'https://kam1bm6ful.execute-api.us-east-1.amazonaws.com/forecast';
    return axios.get(baseUrl,{
        params: {
            units: values.units,
            zip: `${values.zipcode},us`
        }
    })
    .then((response) => response)
    .catch((error) => error);
}

export default requestWeatherData;