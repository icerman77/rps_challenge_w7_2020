import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';


class App extends Component {
  render() {
    return (
      <Container id='viewcontainer'>
        <text>Rock Paper Scissors</text><br></br>
        <button id='buttonplay'>Play</button>
      </Container>
    )
  }
}

export default App;
