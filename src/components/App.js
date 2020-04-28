import React from 'react';
import logo from '../logo.svg';
import { Container, Header } from 'semantic-ui-react'

function App() {
  return (
    <div className="App">
      <Container fluid>
        <Header as='h1' textAlign='center'>Weather Forecast</Header>
      </Container>
    </div>
  );
}

export default App;
