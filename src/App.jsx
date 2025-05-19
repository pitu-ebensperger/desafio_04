import { useState } from "react";

import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Pizza from "./components/pizza/Pizza";

import Cart from "./views/cart/CartPage";
import Home from "./views/home/HomePage";
import Login from "./views/login/LoginPage";
import Register from "./views/register/RegisterPage";
import Profile from "./components/profile/Profile";
import NotFound from "./components/notfound/NotFound";


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
          <Route path="/profile" element={<Profile />} />
          <Route path="/*" element={<NotFound />} />
    </Routes>
    </div>
    <Footer />

  </div>
  );
  };

export default App