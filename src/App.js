import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Summoners from './pages/Summoners'
import NotFound from './pages/404'
import Header from './components/Header.js';
import Footer from './components/Footer.js';

const App = () => {
  return (
    <>
      <Header/>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Summoners />}   />
              <Route element={NotFound}/>
          </Routes>
      </BrowserRouter>
      <Footer/>
    </> 
  )
}
export default App