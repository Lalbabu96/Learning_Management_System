import './App.css'

import { Route, Routes } from 'react-router-dom';

import AboutUS from './Pages/AboutUs.jsx';
import HomePage from "./Pages/HomePage.jsx";



function App() {


  return (
    <>
      <Routes>
         <Route path="/" element={<HomePage/>}> </Route>
         <Route path="/about" element={<AboutUS/>}></Route>
      </Routes>
       
    </>
  )
}

export default App
