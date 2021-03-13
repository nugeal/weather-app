import React, { useState } from 'react';
import { Container, Header, Grid, GridRow, Message, GridColumn } from 'semantic-ui-react';
import '../css/App.css';
import SearchForm from './SearchForm';
import requestWeatherData from '../services/WeatherService';
import DayForecast from '../components/DayForecast';

const WeatherApp = () => {

  const [current, setCurrent] = useState(undefined);
  const [forecast, setForecast] = useState(undefined);
  const [units, setUnits] = useState(undefined);
  const [requestError, setRequestError] = useState(undefined);

  const getWeatherData = (values) => {
    requestWeatherData(values)  //requestWeatherData == fetch in react example
      .then((response) => {
        setCurrent(response.data.current);
        setForecast(response.data.forecast);
        setUnits(values.units);
      })
      .catch((error) => setRequestError(error))
  }

  const convertTempAndSpeed = (units) => {
    let convertedUnits = {};
    switch (units) {
      case 'imperial':
        convertedUnits = {
          temp: 'F',
          wind: 'miles/hour'
        }
          break;
      case 'metric':
        convertedUnits = {
          temp: 'C',
          wind: 'meters/sec'
        }
          break;
      default:
          break;
    }
    return convertedUnits;
  }

  const displayDailyForecast = (dailyData) => {
    return dailyData.map((weatherData) => {
      return (
        <GridColumn>
        <DayForecast currentDay={ false } current={ weatherData } convertTempAndSpeed={ convertTempAndSpeed } units={ units }/>
      </GridColumn>
      )
    })
  }

  return (
    <div className="App">
      <Container fluid>
      <Header id='headerTitle' as='h1' textAlign='center'>Weather Forecaster</Header>
          <Grid container columns={ 1 } textAlign='center'>
            <GridRow>
              <SearchForm getWeatherData={ getWeatherData } />
              { requestError && <Message negative compact content='This request encountered an error.' /> }
            </GridRow>
            <GridRow>
              { current && <h3>Current Conditions in { current.name }</h3> }
            </GridRow>
            <GridRow>
              { forecast &&  <DayForecast currentDay={ true } current={ forecast.current } convertTempAndSpeed={ convertTempAndSpeed } units={ units }/> }
            </GridRow>
            <GridRow>
              { current &&  <h3>8 Day Forecast for { current.name }</h3> }
            </GridRow>
            
          </Grid>
          <Grid container columns={4} textAlign='center'>
            { forecast && displayDailyForecast(forecast.daily) }
          </Grid>
      </Container>
    </div>
  );
}

export default WeatherApp;
