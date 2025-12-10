import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Skill from './components/Home/Skill'
import Contacts from './pages/Contacts'
import Projects from './pages/Projects'
import About from './components/Home/About'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (


    <div>
      <Navbar />
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/skill' element={<Skill />} />
        <Route path='/contacts' element={<Contacts />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>
      <Footer/>
    </div>

  )
}

export default App
