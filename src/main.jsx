import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css';
import Hero from "../src/components/Hero.jsx"
import Layout from './Layout.jsx';
import {Route, RouterProvider, createBrowserRouter,createRoutesFromElements} from "react-router-dom";
import Contact from "./components/Contact/Contact.jsx"

const router= createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path='' element={<Hero />} />
      <Route path='contact/' element={<Contact />} />
    </Route>
))
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
