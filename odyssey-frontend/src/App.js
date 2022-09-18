import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { useStateContext } from './Context/StateContext';
import Landing from './Pages/Landing/Landing';
import './App.css'
import Profile from './Components/Profile/Profile'
import Dashboard from './Components/Dashboard/Dashboard'
import Navbar from './Components/Navbar/Navbar'


const App = () => {

  const {isAuthorised} = useStateContext();
  
  return (
    <>
    {/* <Dashboard/> */}
    <BrowserRouter>
    {isAuthorised?
    <>
      <Routes>
        <Route path="" element={<Profile/>} />
        <Route path="/Dashboard" element={<Dashboard/>} />
      </Routes>
    </>:
      <Routes>
        <Route path="/" element={<Landing/>} />
      </Routes>
    }
      
    </BrowserRouter>
    </>
  )
}

export default App

