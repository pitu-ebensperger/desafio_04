import React from 'react'
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



const Navbar =() => {
    const total = 25000;
    const token = false;


  return (
    <div className="navbar">
        <div className='menu'>
            <a href='#' className="brand">
             <span><span className='brand-icon'><FontAwesomeIcon icon={faPizzaSlice} size='xs'/></span><strong>&nbsp;Pizzería</strong></span>
             <span>Mamma Mía</span></a>
             <button className='nav-btn'><a href='#'><FontAwesomeIcon icon={faHouse} size='xs'/>&nbsp;Home</a></button>
            {token ? 
             <span className='menu'>
                <button className='nav-btn'><a href='#'><FontAwesomeIcon icon={faUser} size='xs'/>&nbsp;Profile</a></button>
                <button className='nav-btn'><a href='#'><FontAwesomeIcon icon={faRightFromBracket} size='xs'/>&nbsp;Logout</a></button>
             </span>
             :
             <span className='menu'>
                <button className='nav-btn'><a href='#'><FontAwesomeIcon icon={faRightToBracket} size='xs'/>&nbsp;Login</a></button>
                <button classNamse='nav-btn'><a href='#'><FontAwesomeIcon icon={faUserPlus}size='xs'/>&nbsp;Register</a></button>
             </span>

            }
            </div>

        <button className='total'><a href='#'><FontAwesomeIcon icon={faCartShopping} />&nbsp;Total ${total.toLocaleString()}</a></button>
     

    </div>
  )
}

export default Navbar;