import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import "./App.css"

function Layout() {
  return (
    <>
   <Navbar />
    <Outlet />
    </>
  )
}

export default Layout