import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Forms from './components/Forms'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Datas from './components/Datas'
import Editdata from './components/Editdata'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element = {<Forms/>} />
      <Route path="/datas" element = {<Datas/>} />
      <Route exact path="/edit/:id" element={<Editdata />} />
    </Routes>
    </BrowserRouter>
      
      
    </>
  )
}

export default App
