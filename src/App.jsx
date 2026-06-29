import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Comic from './pages/Comic';
import Home from './components/Home';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/comic' element={<Comic />}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App

