import React from 'react'
// import "bootstrap/dist/css/bootstrap.min.css"
import { useState } from "react"
import { Link } from "react-router-dom";
import './Auth.css'
import {useStateContext} from '../../Context/StateContext';
import PhoneInput from 'react-phone-number-input';

const Auth = () => {
  const {toggleShowAuth,toggleIsAuthorised} = useStateContext();
  const [authMode, setAuthMode] = useState("signin");
  const [value, setValue] = useState()

  const user = {
    username:"Vansh",
    password:"12345"
  }

  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");

  const handleSubmit = event => {
    event.preventDefault();

    console.log('username', username);
    console.log('password', password);

    if(user.username===username && user.password===password)
    {
      console.log("SIGN IN SUCCESSFUL");
      toggleIsAuthorised();
    }
    else{
      console.log("SIGN IN FAILED");
      alert("Incorrect username or password");
    }
    setUsername('');
    setPassword('');
  };

  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "register" : "signin")
  }

  if (authMode === "signin") {
    return (
      <div className='auth_container'>
        <form onSubmit={handleSubmit}>
          <div className='inner_auth_container'>
          <div className="shadow_box">
            <div className="auth_close_btn">
              <button onClick={toggleShowAuth}>X</button>
            </div>
            <h3 className='auth_header'>Sign In</h3>
            <div >
              <input type="text" className='auth_input' placeholder="Enter Username"
              onChange={event => setUsername(event.target.value)}
              value={username}/>
            </div>
            <div>
              <input type="password" className='auth_input' placeholder="Enter Password"
              onChange={event => setPassword(event.target.value)}
              value={password}/>
            </div>
            <p className='auth_para'>
              <Link to="/">Forgot password?</Link>
            </p>
            <div>
              <button type="submit" className='auth_button'>
                <span>Sign In</span>
              </button>
            </div>
            <div className='auth_subtext'>
              Not registered yet?{" "}
              <span onClick={changeAuthMode} className="span_hover">
                Register
              </span>
            </div>
            
          </div>
          </div>
        </form>
      </div>
    )
  }

  else if (authMode === "register") 
  {
  return (
    <div className='auth_container'>
      <form>
        <div className='inner_auth_container'>
        <div className="shadow_box">
          <div className="auth_close_btn">
              <button onClick={toggleShowAuth}>X</button>
          </div>
          <h3 className='auth_header'>Register</h3>
          <div>
            <input type="text" className='auth_input' placeholder="Enter Username"/>
          </div>
          <div>
          <PhoneInput
            country="US"
            value={value}
            onChange={setValue} />
            {/* <PhoneInput 
            country={'us'}
            specialLabel=""
            placeholder="Enter phone number"/> */}
            {/* <PhoneInput
            country={'us'}
            value={this.state.phone}
            onChange={phone => this.setState({ phone })}
            /> */}
          </div>
          <div >
            <input type="email" className='auth_input' placeholder=" Enter Email Address"/>
          </div>
          <div>
            <input type="password" className='auth_input' placeholder="Enter Password"/>
          </div>
          <div>
            <button type="submit" className='auth_button'>
              <span>Register</span>
            </button>
          </div>
          <div className='auth_subtext'>
            Already registered?{" "}
            <span onClick={changeAuthMode} className="span_hover">
              Sign In
            </span>
          </div>
        </div>
        </div>
      </form>
    </div>
  )
}
}
export default Auth;