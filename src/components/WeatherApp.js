import React, { Component } from 'react';
import moment from 'moment';
import { Container, Header, Grid, GridRow } from 'semantic-ui-react';
import '../css/App.css';
import SearchForm from './SearchForm';
import requestWeatherData from '../services/WeatherService';

class WeatherApp extends Component {

  constructor(props){
    super(props);
    this.state = {
      current: {},
      forecast: {}
    }
  }

  getCurrentDate = () => {
    return moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
  }

  getWeatherData = (values) => {
    requestWeatherData(values)
      .then((response) => this.setState({ current: response.data.current, forecast: response.data.forecast }))
  }

  render() {
    return (
      <div className="App">
        <Container fluid>
        <Header id='headerTitle' as='h1' textAlign='center'>Weather Forecaster</Header>
            <Grid container columns={1} textAlign='center'>
              <GridRow>
                <SearchForm getWeatherData={ this.getWeatherData } />
              </GridRow>
              <GridRow>
                <p id='currentDate'>{ this.getCurrentDate() }</p>
              </GridRow>
            </Grid>
        </Container>
      </div>
    );
  }
}

export default WeatherApp;
