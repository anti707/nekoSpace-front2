import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <NavBar>
    <Routes>
      <Route path='/' element={<HomeUser/>} />
      <Route path='/admin' element={<HomeAdmin/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/register' element={<Register/>} />
    </Routes></NavBar>
  )
};

export default App
