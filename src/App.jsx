import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Studentlist from './components/Studentlist'
import Register from './components/Register'
function App() {
  
  return (
    <>
      <h1>Student Lead</h1>
      <Studentlist> </Studentlist>

      <Register></Register>
      
    </>
  )
}

export default App
