import { useState } from 'react'
import './App.css'
import NavBar from './components/organism/NavBar.jsx'
import { Routes, Route } from 'react-router-dom'
import HomeUser from './pages/homeUser.jsx'
import HomeAdmin from './pages/homeAdmin.jsx'
import { Login, Register } from './pages/auth.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<HomeUser/>} />
        <Route path='/admin' element={<HomeAdmin/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
      </Routes>
    </>
  )
};

export default App
