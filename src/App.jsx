import './App.css';
import Cart from "./components/cart/Cart";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
// import Home from "./pages/HomePage";
// import LoginPage from "./pages/LoginPage";
// import RegisterPage from "./pages/RegisterPage";


const App = () => {
  return (
    <div className="main-container">
    <Navbar />
    {/* <HomePage /> */}
    {/* <RegisterPage /> */}
    {/* <LoginPage /> */}
    <Cart />
    <Footer />

  </div>
  );
  };

export default App