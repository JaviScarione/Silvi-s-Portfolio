import React from 'react';
import '../css/header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import '../js/script';

function Header() {
  return (
    <header id='header'>
      <div className='container__header text'>
        <div className='container__button'>
          <a href='/contact'>
            <button type="button" className='btn btn-contact btn-lg backgroundpink text'>Contact Silvi</button>
          </a>  
        </div>
        <div className='container__nav'>
          <nav id='nav'>
            <ul>
              <li><a id='btnhome' href="/">Home</a></li>
              <li><a id='btnabout' href="/about">About</a></li>
              <li><a id='btnservices' href="/services">Services</a></li>
              <li><a id='btncontact' href="contact">Contact</a></li>
            </ul>
          </nav>
          <div className='btn__menu' id='btn_menu'>
          <FontAwesomeIcon icon={faBars} />
        </div>
        </div>        
      </div>
    </header>

    
  );
}

export default Header;