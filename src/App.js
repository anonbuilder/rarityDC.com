import {React,useCallback,  useEffect} from 'react'
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Main from './components/Main.js';
import { Toaster } from 'react-hot-toast'

const App = () => {
  
  return (
    <>
      <Header/>
      <Main/>
      <Toaster/>
      <Footer/>
    </> 
  )
}
export default App