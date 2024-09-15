import React from 'react';
import { useState } from 'react';
import Pic from "../../assets/contact_img.jpg";
import "../Contact/contact.css";
import Header from './Header';

function contact() {
  const[name,setName]=useState("");
  const[mail,setMail]=useState("");
  const[text,setText]=useState("");

  function OnSubmit(event){
    event.preventDefault();
    setName(event.target[0].value);
    setMail(event.target[1].value);
    setText(event.target[2].value);
  }
  
  return (
   <>
   <Header />
   <div className='contact'>
    <div className='box'>
    <button className='chat-btn' >VIA SUPPORT CHAT</button>
    <button className='call-btn' >VIA CALL</button>
    <br />
    <button className='email-btn' > 
      VIA EMAIL FORM
    </button>
    <form className='form' onSubmit={OnSubmit}>
      <label for="name">Name</label>
      <input type='text' name='name' />
      <label for="email">E-mail</label>
      <input type='text' name='email'/>
      <label for="text">Text</label>
      <input type='text' name='text' className='text'/>
      <button className='submit-btn'>SUBMIT</button>
      <div>{name + " " + mail + " " + text}</div>
    </form>
    
    </div>
    <img src={Pic} alt="service image" className='service-img'/>
   </div>
   
   </>
  )
}


export default contact