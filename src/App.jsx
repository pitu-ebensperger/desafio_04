import './App.css'
import Navbar from './components/navbar/Navbar'
import Home from './components/home/home'
import Footer from './components/footer/Footer'
import RegisterPage from './pages/Register/RegisterPage'
import LoginPage from './pages/Login/LoginPage'
import Cart from './pages/Cart/CartPage'

const App = () => {
  return (
  <div className="main-container">
  <Navbar />
  
  {/*  <Home />  */}
  {/*  <RegisterPage />  */}
  {/*  <LoginPage />  */}
  <Cart />
  <Footer />
  </div>
  );
  };

export default App