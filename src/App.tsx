//import './App.css';
import styled from 'styled-components';
import { Formik, Form } from 'formik';
import Input from './components/Input'
import Button from './components/Button'


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
function App() {
  const handleSubmit = ({ deposit, contribution, years, rate }) => {
    const val = compoundInterest(Number(deposit), Number(contribution), Number(years), Number(rate))
    console.log(val)
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
        >
          <Form>
            <Input name="deposit" label="Deposito Inicial" />
            <Input name="contribution" label="Contribucion Anual" />
            <Input name="years" label="Años" />
            <Input name="rate" label="Interes estimado" />
            <Button>Calcular</Button>
          </Form>
        </Formik>
      </Section>
    </Container>
  )
}

export default App