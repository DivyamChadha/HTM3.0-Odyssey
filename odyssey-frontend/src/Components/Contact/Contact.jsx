import React,{useState} from 'react'
import './Contact.css'
import {useStateContext} from '../../Context/StateContext';

import Equispacezedark from '../../Assets/Equispazedark 1.png'

const Contact = () => {
  const {isBlur} = useStateContext();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [help, setHelp] = useState("");
  const [group, setGroup] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(firstName);
    console.log(lastName);
    alert("Form Submitted");
  }
  return (
    <div id='contact' className={isBlur ? "blur " : ""}>
      <div className="contact_container">'
        <h1>Contact Us</h1>
        <div className="contact_form_container">
          <div className="contact_form">
            <div className="form_header">
              <h3>Send us a message</h3>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="form_1">
                <input type="text" placeholder='First Name' value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                <input type="text" placeholder='Last Name' value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                </div>
                <div className="form_1">
                <input type="phone" placeholder='Phone' value={phone} onChange={(e) => setPhone(e.target.value)}/>
                <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="form_2">
                <input type="text" placeholder='Group or Company' value={group} onChange={(e) => setGroup(e.target.value)}/>
                <input type="text" placeholder='How can we help?' value={help} onChange={(e) => setHelp(e.target.value)}/>
                </div>
                <div className="form_1">
                <button type='submit'>Submit</button>
                </div>
                
            </form>
          </div>
          <div className="contact_logo_container">     
            <div className="contact_logo">
              <img src={Equispacezedark} alt="" />
            </div>
          </div>
      </div>
      
      </div>
    </div>

  )
}

export default Contact
