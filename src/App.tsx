import { useState } from 'react';

const App = () => {
  const [ value, setValue ] = useState({normal: 'default', text: '', select: '', check: false})
  const handleChange = (e) => {
    console.log(e.target.type, e.target.checked)
    setValue((state) => ({
      ...state,
      [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value
    }))
  }

  console.log(value)
  return (
    <div>
      {value.length < 5 ? <span>longitud minima de 5</span> : null}
      <input type="text" name="normal" value={value} onChange={handleChange} />
      <textarea name='texto' onChange={handleChange} value={value.text} />

      <select value={value.select} name="select" onChange={handleChange}>
        <option value="">Seleccionar</option>
        <option value="feliz">Feliz</option>
        <option value="triste">Triste</option>
        <option value="emocionado">Emocionado</option>
        <option value="enojado">Enojado</option>
      </select>

      <input
        type="checkbox"
        name="check"
        onChange={handleChange}
        checked={value.check}
      />
    </div>
  )
}

export default App;
