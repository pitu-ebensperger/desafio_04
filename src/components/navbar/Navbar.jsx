import './Navbar.css'
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPizzaSlice } from '@fortawesome/free-solid-svg-icons'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faLock } from '@fortawesome/free-solid-svg-icons'
import { faUnlock } from '@fortawesome/free-solid-svg-icons'
import { faUserLock } from '@fortawesome/free-solid-svg-icons'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'



const Navbar =() => {
    const total = 25000;
    const token = false;
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
      setMenuOpen(!isMenuOpen);
    };

  return (
    <div>
      <div className="navbar-container">
    <div className="navbar">
        <div className='navbar-menu'>
            <a href='#' className="brand">
             <span><span className='brand-icon'><FontAwesomeIcon icon={faPizzaSlice} size='xs'/></span><strong>&nbsp;Pizzería</strong></span>
             <span>Mamma Mía</span></a>
             <button className='nav-btn btn-home'><a href='#'><FontAwesomeIcon icon={faHouse} size='xs'/>&nbsp;Home</a></button>
            {token ? 
             <span className='navbar-menu'>
                <button className='nav-btn tooltip'><a href='#'><FontAwesomeIcon icon={faUser} size='xs'/><span className="Register">&nbsp;Profile</span></a><span class="tooltiptext">Profil</span></button>
                <button className='nav-btn tooltip'><a href='#'><FontAwesomeIcon icon={faRightFromBracket} size='xs'/><span className="Register">&nbsp;Logout</span></a><span class="tooltiptext">Profil</span></button>
             </span>
             :
             <span className='navbar-menu'>
                <button className='nav-btn tooltip'><a href='#'><FontAwesomeIcon icon={faRightToBracket} size='xs'/><span className="btntitle">&nbsp;Login</span></a><span class="tooltiptext">Login</span></button>
                <button className='nav-btn tooltip'><a href='#'><FontAwesomeIcon icon={faUserPlus} size='xs'/><span className="btntitle">&nbsp;Register</span></a><span class="tooltiptext">Register</span></button>
             </span>

            }
            </div>
  
        <button className='total'><a href='#'><FontAwesomeIcon icon={faCartShopping} size='xs'/>&nbsp;<span className="totaltitle">Total&nbsp;</span>${total.toLocaleString()}</a></button>
         <div className="menu-toggle" onClick={toggleMenu}>
            <FontAwesomeIcon icon={faBars} size='xl' />
          </div>
        </div>
      </div>

      <div className="menuMobile" style={{ display: isMenuOpen ? 'flex' : 'none' }}>
        <button className='nav-btn btn-home'><a href='#'><FontAwesomeIcon icon={faHouse} size='xs'/>&nbsp;Home</a></button>
        {token ? 
          <span className='menu'>
            <button className='nav-btn'><a href='#'><FontAwesomeIcon icon={faUser} size='xs'/><span className="Register">&nbsp;Profile</span></a></button>
            <button className='nav-btn'><a href='#'><FontAwesomeIcon icon={faRightFromBracket} size='xs'/><span className="Register">&nbsp;Logout</span></a></button>
          </span>
          :
          <span className='menu'>
            <button className='nav-btn'><a href='#'><FontAwesomeIcon icon={faRightToBracket} size='xs'/><span className="btntitle">&nbsp;Login</span></a></button>
            <button className='nav-btn'><a href='#'><FontAwesomeIcon icon={faUserPlus} size='xs'/><span className="btntitle">&nbsp;Register</span></a></button>
          </span>
        }
      </div>
    </div>
  );
}


export default Navbar;