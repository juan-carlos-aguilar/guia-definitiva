import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'

export default function App() {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to={'/'}>Home</Link>
          </li>
          <li>
            <Link to={'/about'}>About</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about">
          <Route index element={<About />} />
          <Route path=":number" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
