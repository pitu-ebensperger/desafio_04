import { useState } from "react";

import './App.css';
import Cart from "./pages/cart/Cart";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import RegisterPage from "./pages/register/Register";


const App = () => {
  return (
    <div className="main-container">
    <Navbar />
    {/* <Home /> */}
    {/* <Register /> */}
    {/* <Login /> */}
    <Home />
    <Footer />

  </div>
  );
  };

export default App