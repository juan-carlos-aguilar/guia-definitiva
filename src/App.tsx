import { Component } from "react";
import styled from 'styled-components';
import './App.css';

// Simple styled component
const P = styled.p`
  font-size: 24px;
  color: red;
`

const Button = styled.button`
  width: 100px;
  height: 50px;
  background-color: ${props => props.primary ? 'red' : 'white'};
  color: ${props => props.primary ? 'white' : 'red'};
  border: solid 2px red;
  border-radius: 4px;
`

function App() {
  return (
    <div className="App">
      <h1>Styled Components</h1>
      <P>Carlos</P>
      <Button>Enviar</Button>
      <Button primary>Enviar</Button>
    </div>
  )
}

export default App