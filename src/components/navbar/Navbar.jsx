import './Navbar.css'
import { useState, useContext } from 'react';
import { useNavigate, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPizzaSlice,faHouse,faCartShopping,faUser,faLock,faUnlock,faUserLock,faUserPlus,faRightFromBracket,faRightToBracket,faBars, faTimes} from '@fortawesome/free-solid-svg-icons';
import { CartContext } from "../../context/cartContext";
import { UserContext } from "../../context/UserContext";





const NavbarMenu =() => {
    const { cartItems = [] } = useContext(CartContext);
    const { token, profile, logout } = useContext(UserContext);

    const handleLogout = () => {
        logout();
        navigate('/login');
        
      };

    const cartTotal = cartItems
      .filter((pizza) => pizza.quantity > 0) 
      .reduce((total, pizza) => {
        return total + pizza.price * pizza.quantity;
      }, 0);
  
    // Verificar si hay token
    const isLoggedIn = !!token; 


    // Menú hamburguesa - Estado + Funciones toggle y close
    const [isMenuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
      setMenuOpen(!isMenuOpen);
    };
    
    const closeMenu = () => setMenuOpen(false);

  return (
    <div>
      <div className="navbar-container">
    <div className="navbar">
        <div className='navbar-menu'>
            <Link to='/home' className="brand">
                <span><span className='brand-icon'><FontAwesomeIcon icon={faPizzaSlice} size='xs'/></span><strong>&nbsp;Pizzería</strong></span>
                <span>Mamma Mía</span>
            </Link>
            <Link to='/home'className='nav-btn btn-home'>
            <FontAwesomeIcon icon={faHouse} size='xs'/>&nbsp;Home
            </Link>
            
            {isLoggedIn ? 
              <>
                <Link to='/profile' className='nav-btn' onClick={closeMenu}>
                  <FontAwesomeIcon icon={faUser} size='xs' />
                  <span className="btntitle">&nbsp;&nbsp;{profile?.name || "Perfil"}</span>
                </Link>
                <button className='nav-btn' onClick={() => { logout(); closeMenu(); }}>
                  <FontAwesomeIcon icon={faRightFromBracket} size='xs' />
                  <span className="btntitle">&nbsp;&nbsp;Logout</span>
                </button>
              </>
             :
             <div className="navbar-menu">
                <Link to='/login' className='nav-btn' onClick={closeMenu}>
                    <FontAwesomeIcon icon={faRightToBracket} size='xs'/>
                    <span className="btntitle">&nbsp;Login</span>
                    <span className="tooltiptext">Login</span>
                </Link>
                <Link to='/register' className='nav-btn'><FontAwesomeIcon icon={faUserPlus} size='xs'/>
                    <span className="btntitle">&nbsp;Registro</span>
                    <span className="tooltiptext">Registro</span>
                </Link>
             </div>

            }
            </div>
  
        <Link to='/cart' className='total'>
            <FontAwesomeIcon icon={faCartShopping} size='xs'/>&nbsp;
            <span className="totaltitle">Total&nbsp;</span>${cartTotal.toLocaleString()}
        </Link>
         <div className="menu-toggle" onClick={toggleMenu}>
            <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} size='xl' />
          </div>
        </div>
      </div>

      <div className="menuMobile" style={{ display: isMenuOpen ? 'flex' : 'none' }}>
        <Link to='/home' className='nav-btn btn-home' onClick={closeMenu}>
            <FontAwesomeIcon icon={faHouse} size='xs'/>&nbsp;&nbsp;Home
        </Link>
        {isLoggedIn ? 
          <span className='menu'>
            <Link to='/profile' className='nav-btn' onClick={closeMenu}>
                <FontAwesomeIcon icon={faUser} size='xs'/>
                <span className="btntitle">&nbsp;&nbsp;Profile</span>
            </Link>
            <button className='nav-btn' onClick={() => { handleLogout; closeMenu(); }}>
                <FontAwesomeIcon icon={faRightFromBracket} size='xs'/>
                <span className="btntitle">&nbsp;&nbsp;Logout</span>
            </button>
          </span>
          :
          <span className='menu'>
            <Link to='/login' className='nav-btn' onClick={closeMenu}>
            <FontAwesomeIcon icon={faRightToBracket} size='xs'/>
            <span className="btntitle">&nbsp;&nbsp;Login</span>
            </Link>
            <Link to='/register' className='nav-btn' onClick={closeMenu}>
              <FontAwesomeIcon icon={faUserPlus} size='xs'/>
              <span className="btntitle">&nbsp;&nbsp;Register</span>
            </Link>
          </span>
        }
        <Link to='/cart' className='total' onClick={closeMenu}>
            <FontAwesomeIcon icon={faCartShopping} size='xs'/>&nbsp;
            <span className="totaltitle">Total&nbsp;&nbsp;</span>${cartTotal.toLocaleString()}
        </Link>
      </div>
    </div>
  );
}


export default NavbarMenu;