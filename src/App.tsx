import { Component, useState } from "react";
import './App.css';

const App = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      Contador: {counter}
      <button onClick={() => setCounter(counter + 1)}>Increase</button>
    </div>
  )
}

export default App