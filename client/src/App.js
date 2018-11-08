import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  Header,
  Container
} from 'semantic-ui-react';
import styled from 'styled-components';

const BlackBody = styled.div`
  font-family: 'K2D', sans-serif;
  background-color: black;
  color: white;
  background-size: cover;
  height: 1000px;
`

class App extends Component {
  render() {
    return (
      <BlackBody>
        <Container>
        <Header as='h1' color='teal'>Tony Choutdara</Header>
        <Header as='h3' color='teal'>Web Developer</Header>
        </Container>
      </BlackBody>
    );
  }
}

export default App;
