
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

import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Navbar.css'


const NavbarMenu =() => {
    const total = 25000;
    const token = false;
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
      setMenuOpen(!isMenuOpen);
    };


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <div>
      <div className="navbar-container">
    <div className="navbar">
        <div className='navbar-menu'>
            <a href='/' className="brand">
             <span><span className='brand-icon'><FontAwesomeIcon icon={faPizzaSlice} size='xs'/></span><strong>&nbsp;Pizzería</strong></span>
             <span>Mamma Mía</span></a>
             <button className='nav-btn btn-home'><a href='/'><FontAwesomeIcon icon={faHouse} size='xs'/>&nbsp;Home</a></button>
            {token ? 
             <span className='navbar-menu'>
                <button className='nav-btn tooltip'><a href='/profile'><FontAwesomeIcon icon={faUser} size='xs'/><span className="btntitle">&nbsp;Profile</span></a><span className="tooltiptext">Profile</span></button>
                <button className='nav-btn tooltip'><a href='/logout'><FontAwesomeIcon icon={faRightFromBracket} size='xs'/><span className="btntitle">&nbsp;Logout</span></a><span className="tooltiptext">Logout</span></button>
             </span>
             :
             <span className='navbar-menu'>
                <button className='nav-btn tooltip'><a href='/login' onClick={handleShow}><FontAwesomeIcon icon={faRightToBracket} size='xs'/><span className="btntitle">&nbsp;Login</span></a><span className="tooltiptext">Login</span></button>
                <button className='nav-btn tooltip'><a href='/register'><FontAwesomeIcon icon={faUserPlus} size='xs'/><span className="btntitle">&nbsp;Register</span></a><span className="tooltiptext">Register</span></button>
             </span>

            }
            </div>
  
        <button className='total'><a href='/cart'><FontAwesomeIcon icon={faCartShopping} size='xs'/>&nbsp;<span className="totaltitle">Total&nbsp;</span>${total.toLocaleString()}</a></button>
         <div className="menu-toggle" onClick={toggleMenu}>
            <FontAwesomeIcon icon={faBars} size='xl' />
          </div>
        </div>
      </div>

      <div className="menuMobile" style={{ display: isMenuOpen ? 'flex' : 'none' }}>
        <button className='nav-btn btn-home'><a href='/'><FontAwesomeIcon icon={faHouse} size='xs'/>&nbsp;Home</a></button>
        {token ? 
          <span className='menu'>
            <button className='nav-btn'><a href='/profile'><FontAwesomeIcon icon={faUser} size='xs'/><span className="btntitle">&nbsp;Profile</span></a></button>
            <button className='nav-btn'><a href='/logout'><FontAwesomeIcon icon={faRightFromBracket} size='xs'/><span className="btntitle">&nbsp;Logout</span></a></button>
          </span>
          :
          <span className='menu'>
            <button className='nav-btn'><a href='/login'><FontAwesomeIcon icon={faRightToBracket} size='xs'/><span className="btntitle">&nbsp;Login</span></a></button>
            <button className='nav-btn'><a href='/register'><FontAwesomeIcon icon={faUserPlus} size='xs'/><span className="btntitle">&nbsp;Register</span></a></button>
          </span>
        }
        <button className='total'><a href='/cart'><FontAwesomeIcon icon={faCartShopping} size='xs'/>&nbsp;<span className="totaltitle">Total&nbsp;</span>${total.toLocaleString()}</a></button>
      </div>
    </div>
  );
}


export default NavbarMenu;