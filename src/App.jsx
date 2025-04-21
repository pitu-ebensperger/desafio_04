import './App.css'
import Navbar from './components/navbar/Navbar'
import Home from './components/home/Home'
import Footer from './components/footer/Footer'
import RegisterPage from './pages/RegisterPage/RegisterPage'
import LoginPage from './pages/LoginPage/LoginPage'

const App = () => {
  return (
  <div className="main-container">
  <Navbar />
  {/*  <Home />  */}
<RegisterPage />  
  {/*  <LoginPage />  */}
  <Footer />
  </div>
  );
  };

export default App