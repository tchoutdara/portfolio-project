import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  Header,
  Container, 
  Divider
} from 'semantic-ui-react';
import styled from 'styled-components'

const Theme = styled.div`
  background-color: white;
  height: 100%;
  background-size: cover;
`

class App extends Component {
  render() {
    return (
      <Container>
      <Theme>
            <Header as='h1' color='teal' style={{textAlign:'center', marginTop:'35px'}}>Hello my name is Tony Choutdara and I am a Web Developer</Header>
            <Header as='h3' color='teal' style={{textAlign:'center'}}>Ruby  |  Javascript  |  PostgreSQL</Header>
      </Theme>
      </Container>
    );
  }
}

export default App;
