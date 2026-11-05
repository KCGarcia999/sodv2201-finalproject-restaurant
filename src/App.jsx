import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom"
import Home from './pages/Home'
import Admin from './pages/Admin'
import Customer from './pages/Customer'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />\
          <Route path="/admin" element={<Admin />} />
          <Route path="/order" element={<Customer />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
