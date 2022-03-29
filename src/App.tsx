import { useState } from 'react';
import Titulo from './components/Titulo';
import MyForm from './components/MyForm';
import MyList from './components/MyList';
import './App.css';

function App() {
  const [valores, setValores] = useState([])
  const handleSubmit = (values) => {
    setValores([
      ...valores,
      values
    ])
  }

  return (
    <div>
      <Titulo>Mi Titulo</Titulo>
      <MyForm onSubmit={handleSubmit} />
      <MyList data={valores} />
    </div>
  )
}

export default App