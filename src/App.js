import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { PortfolioPage } from './Pages/PortfolioPage'
import { HomePage } from './Pages/HomePage'
import { ScrollButton } from './components/ScrollButton/ScrollButton'

import './normalize.css'
import './App2.css'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/portfolio' element={<PortfolioPage />} />
        <Route path='*' />
      </Routes>
      <ScrollButton />
    </Router>
  )
}

export default App