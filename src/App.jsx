import { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Pizza from "./components/pizza/Pizza";
import Cart from "./pages/cart/Cart";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Profile from "./pages/profile/Profile";
import NotFound from "./components/notfound/NotFound";
import Administracion from "./pages/Administracion";

import { UserContext } from "./context/UserContext";
import './App.css';

const App = () => {
  // Tomar token de UserContext
  const { token } = useContext(UserContext); 

  return (
    <div className="main-container">
    <Navbar />
    <div className="page">
    <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={token ? <Administracion /> : <Navigate to="/login" />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={token ? <Navigate to="/home" /> : <Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/pizza/:id" element={<Pizza />} />
          <Route path="/profile" element={token ? <Profile /> : <Navigate to="/login" />} />
          <Route path="/*" element={<NotFound />} />
    </Routes>
    </div>
    <Footer />
  </div>
  );
  };

export default App
