import { Component } from "react";
import styled from 'styled-components';
import './App.css';

// Simple styled component
const P = styled.p`
  font-size: 24px;
  color: red;
` 

function App() {
  return (
    <div className="App">
      <h1>Styled Components</h1>
      <P>Carlos</P>
    </div>
  )
}

export default App