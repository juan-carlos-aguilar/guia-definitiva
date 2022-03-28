import { Component, useState } from "react";
import './App.css';
import useFormulario from './hooks/useFormulario'
import Input from "./components/Input/Input";
import Card from "./components/Card/Card";
import { Container } from "./components/Container/Container";
import Button from "./components/Button/Button";

function App() {
  const [usuarios, setUsuarios] = useState([])
  const [formulario, handleChange] = useFormulario({
    name: '',
    lastname: '',
    email: ''
  })

  const submit = e => {
    e.preventDefault()
    setUsuarios([
      ...usuarios,
      formulario,
    ])
  }

  return (
    <Container>
      <Card>
        <form onSubmit={submit}>
          <Input
            label="Nombre"
            name="name"
            value={formulario.name}
            onChange={handleChange}
          />
          <Input
            label="Apellido"
            name="lastname"
            value={formulario.lastname}
            onChange={handleChange}
          />
          <Input
            label="Correo"
            name="email"
            value={formulario.email}
            onChange={handleChange}
          />
          <Button>Enviar</Button>
        </form>
      </Card>
      <Card>
        <ul>
          {usuarios.map(x =>
            <li key={x.email}>{`${x.name} ${x.lastname}: ${x.email}`}</li>
          )}
        </ul>
      </Card>
    </Container>
  )
}

export default App