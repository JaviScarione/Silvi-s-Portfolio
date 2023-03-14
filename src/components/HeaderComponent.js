import React from 'react';
import '../css/header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


function Header() {

  function scrollnav() {
    let scroll = document.documentElement.scrollTop;
    let header = document.getElementById("header");

    if (scroll > 20){
        header.classList.add("nav_mod");
    }else if (scroll < 20){
        header.classList.remove("nav_mod");
    }
  }

  function showMenu() {
      let menu = document.getElementById("header");
      let nav = document.getElementById("nav");
      menu.classList.toggle('move__content');
      nav.classList.toggle('move__nav');
  }


  return (
    <header id='header' onScroll={scrollnav}>
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
              <li><a id='btncontact' href="/contact">Contact</a></li>
              <li><a id='btnfaqs' href="/faqs">FAQs</a></li>
            </ul>
          </nav>
          <div className='btn__menu' id='btn_menu' onClick={showMenu}>
            <FontAwesomeIcon icon={faBars} />
          </div>
        </div>        
      </div>
    </header>

    
  );
}

export default Header;