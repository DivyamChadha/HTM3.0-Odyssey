import React from 'react'
import Categories from '../../Components/Categories/Categories'
import About from '../../Components/About/About'
import Contact from '../../Components/Contact/Contact'
import Navbar from '../../Components/Navbar/Navbar'
import Auth from '../../Components/Auth/Auth'
import {useStateContext} from '../../Context/StateContext';
import Quote from '../../Assets/Quote.png'
import Vector from '../../Assets/Vector.png'
import './Landing.css'

const Landing = () => {
  const {isBlur,showAuth} = useStateContext();
  return (
    <>
    <div id="home"></div>
    <Navbar/>
    <div className={isBlur ? "blur main_container" : "main_container"}>
      <div className="shape_container">
        <img src={Quote} alt="" />
        
      </div>
      <div className="banner_container">
        <img src={Vector} alt="" />
      </div>




    </div>





    {/* <Categories/> */}
    <About/>
    <Contact/>
    {isBlur && showAuth ?  <Auth/> : null}
    </>
  )
}

export default Landing