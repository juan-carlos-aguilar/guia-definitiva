import { useState } from 'react';

const App = () => {
  const [ value, setValue ] = useState({normal: 'default', text: ''})
  const handleChange = (e) => {
    setValue((state) => ({
      ...state,
      [e.target.name]: e.target.value
    }))
  }

  console.log(value)
  return (
    <div>
      {value.length < 5 ? <span>longitud minima de 5</span> : null}\
      <input type="text" name="normal" value={value} onChange={handleChange} />
      <textarea name='texto' onChange={handleChange} value={value.text} />

      <select value={value.select} name="select" onChange={handleChange}>
        <option value="">Seleccionar</option>
        <option value="feliz">Feliz</option>
        <option value="triste">Triste</option>
        <option value="emocionado">Emocionado</option>
        <option value="enojado">Enojado</option>
      </select>
    </div>
  )
}

export default App;