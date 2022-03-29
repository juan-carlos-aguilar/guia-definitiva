import { Component } from "react";
import styled from 'styled-components';
import './App.css';

// Simple styled component
const P = styled.p`
  font-size: 24px;
  color: red;
`

const Button = styled.button`
  transition: box-shadow 0.2s ease;
  width: 100px;
  height: 50px;
  background-color: ${props => props.primary ? 'red' : 'white'};
  color: ${props => props.primary ? 'white' : 'red'};
  border: solid 2px red;
  border-radius: 4px;
  margin: 10px;

  &:hover {
    box-shadow: 1px 2px 4px rgb(0,0,0,0.3);
  } 
`

const Link = ({ className, ...props }) => {
  return <a className={className} {...props}></a>
}

const StyledLink = styled(Link)`
  color: blue;
`

function App() {
  return (
    <div className="App">
      <h1>Styled Components</h1>
      <P>Carlos</P>
      <Button>Enviar</Button>
      <Button primary>Enviar</Button><br/>
      <Link>Link</Link><br />
      <StyledLink>Styled Link</StyledLink>
    </div>
  )
}

export default App