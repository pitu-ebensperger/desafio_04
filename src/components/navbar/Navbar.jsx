
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

import Cart from '../cart/Cart'

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
            <Link to='home' className="brand">
                <span><span className='brand-icon'><FontAwesomeIcon icon={faPizzaSlice} size='xs'/></span><strong>&nbsp;Pizzería</strong></span>
                <span>Mamma Mía</span>
            </Link>
            <Link to='/home'className='nav-btn btn-home'>
            <FontAwesomeIcon icon={faHouse} size='xs'/>&nbsp;Home
            </Link>
            {token ? 
             <span className='navbar-menu'>
                <Link to='/profile'className='nav-btn tooltip'>
                    <FontAwesomeIcon icon={faUser} size='xs'/>
                    <span className="btntitle">&nbsp;Perfil</span>
                    <span className="tooltiptext">Perfil</span>
                </Link>
                <Link to='/logout' className='nav-btn tooltip'>
                    <FontAwesomeIcon icon={faRightFromBracket} size='xs'/>
                    <span className="btntitle">&nbsp;Logout</span>
                    <span className="tooltiptext">Logout</span>
                </Link>
             </span>
             :
             <span className='navbar-menu'>
                <Link to='/login' className='nav-btn' onClick={handleShow}>
                    <FontAwesomeIcon icon={faRightToBracket} size='xs'/>
                    <span className="btntitle">&nbsp;Login</span>
                    <span className="tooltiptext">Login</span>
                </Link>
                <Link to='/register' className='nav-btn'><FontAwesomeIcon icon={faUserPlus} size='xs'/>
                    <span className="btntitle">&nbsp;Registro</span>
                    <span className="tooltiptext">Registro</span>
                </Link>
             </span>

            }
            </div>
  
        <Link to='/cart' className='total'>
            <FontAwesomeIcon icon={faCartShopping} size='xs'/>&nbsp;
            <span className="totaltitle">Total&nbsp;</span>${total.toLocaleString()}
        </Link>
         <div className="menu-toggle" onClick={toggleMenu}>
            <FontAwesomeIcon icon={faBars} size='xl' />
          </div>
        </div>
      </div>

      <div className="menuMobile" style={{ display: isMenuOpen ? 'flex' : 'none' }}>
        <Link to='/home' className='nav-btn btn-home'>
            <FontAwesomeIcon icon={faHouse} size='xs'/>&nbsp;&nbsp;Home
        </Link>
        {token ? 
          <span className='menu'>
            <Link to='/profile' className='nav-btn'>
                <FontAwesomeIcon icon={faUser} size='xs'/>
                <span className="btntitle">&nbsp;&nbsp;Profile</span>
            </Link>
            <Link to='/logout' className='nav-btn'>
                <FontAwesomeIcon icon={faRightFromBracket} size='xs'/>
                <span className="btntitle">&nbsp;&nbsp;Logout</span>
            </Link>
          </span>
          :
          <span className='menu'>
            <Link to='/login' className='nav-btn'>
            <FontAwesomeIcon icon={faRightToBracket} size='xs'/>
            <span className="btntitle">&nbsp;&nbsp;Login</span>
            </Link>
            <Link to='/register' className='nav-btn'>
              <FontAwesomeIcon icon={faUserPlus} size='xs'/>
              <span className="btntitle">&nbsp;&nbsp;Register</span>
            </Link>
          </span>
        }
        <Link to='/cart' className='total'>
            <FontAwesomeIcon icon={faCartShopping} size='xs'/>&nbsp;
            <span className="totaltitle">Total&nbsp;&nbsp;</span>${total.toLocaleString()}
        </Link>
      </div>
    </div>
  );
}


export default NavbarMenu;