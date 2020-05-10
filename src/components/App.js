import React from 'react';
import moment from 'moment';
import { Container, Header, Grid, GridRow } from 'semantic-ui-react';
import '../css/App.css';
import SearchForm from './SearchForm';

function App() {

const getCurrentDate = () => {
  return moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
}

  return (
    <div className="App">
      <Container fluid>
      <Header id='headerTitle' as='h1' textAlign='center'>Weather Forecaster</Header>
          <Grid container columns={1} textAlign='center'>
            <GridRow>
              <SearchForm />
            </GridRow>
            <GridRow>
              <p id='currentDate'>{ getCurrentDate() }</p>
            </GridRow>
          </Grid>
      </Container>
    </div>
  );
}

export default App;
