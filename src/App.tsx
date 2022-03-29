//import './App.css';
import styled from 'styled-components';
import { useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup'
import Input from './components/Input'
import Button from './components/Button'
import Balance from './components/Balance'


// Adding styles with Styled-components
const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  align-items: center;
`
const Section = styled.section`
  background-color: #eee;
  border-top: solid 2px palevioletred;
  padding: 20px 25px;
  width: 500px;
  box-shadow: 0px 2px 3px rgb(0,0,0,0.3);
`

const compoundInterest = (deposit, contribution, years, rate) => {
  let total = deposit
  for (let i = 0; i < years; i++) {
    total = (total + contribution) * (rate + 1)
  }

  return Math.round(total)
}

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
})

function App() {
  const [balance, setBalance] = useState('');
  const handleSubmit = ({ deposit, contribution, years, rate }) => {
    const val = compoundInterest(Number(deposit), Number(contribution), Number(years), Number(rate))
    setBalance(formatter.format(val))
  }

  return (
    <Container>
      <Section>
        <Formik
          initialValues={{
            deposit: '',
            contribution: '',
            years: '',
            rate: '',
          }}
          onSubmit={handleSubmit}
          validationSchema={Yup.object({
            deposit: Yup.number().required('Campo Obligatorio').typeError('Debe ser un numero'),
            contribution: Yup.number().required('Campo Obligatorio').typeError('Debe ser un numero'),
            years: Yup.number().required('Campo Obligatorio').typeError('Debe ser un numero'),
            rate: Yup.number()
              .required('Campo Obligatorio')
              .typeError('Debe ser un numero')
              .min(0, 'El valor minimo es 0')
              .max(1, 'El valor maximo debe ser 1'),
          })}
        >
          <Form>
            <Input name="deposit" label="Deposito Inicial" />
            <Input name="contribution" label="Contribucion Anual" />
            <Input name="years" label="Años" />
            <Input name="rate" label="Interes estimado" />
            <Button type="submit">Calcular</Button>
          </Form>
        </Formik>
        {balance !== '' ? <Balance>Balance final: {balance}</Balance> : null}
      </Section>
    </Container>
  )
}

export default App