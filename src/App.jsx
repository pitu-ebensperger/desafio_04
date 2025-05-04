import { useState } from "react";

import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Pizza from "./components/pizza/Pizza";

import Cart from "./pages/cart/Cart";
import Home from "./pages/home/home";
import Login from "./pages/Login/login";
import Register from "./pages/Register/register";


const App = () => {
  return (
    <div className="main-container">
    <Navbar />
    <div className="page">
    <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/pizza/:id" element={<Pizza />} />
    </Routes>
    </div>
    <Footer />

  </div>
  );
  };

export default App