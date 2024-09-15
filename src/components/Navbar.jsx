import React from 'react';
import logo from "../assets/puma-logo.jpg"
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
    <nav className='container'>
        <div className='nav-section'>
            <img src={logo} alt='puma logo' className='nav-logo'/>
        </div>
        <div className='nav-section'>
            <ul>
                <li>MENU</li>
                <li>LOCATION</li>
               <Link to='/about'> <li>ABOUT</li></Link>
               <Link to='/contact'> <li>CONTACT</li></Link>



            </ul>
        </div>
        <div className='nav-section login'>
        <button className='nav-button'>Login</button>
        </div>
    </nav>
    </>
  )
}

export default Navbar