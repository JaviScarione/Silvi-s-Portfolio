import { useState, useEffect, useRef } from 'react';
import '../css/header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


import { Link } from 'react-router-dom';

function Header() {

  const [selectedItem, setSelectedItem] = useState('');
  const [scrollY, setScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    function handleScroll() {
      setScrollY(window.scrollY);
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const header = document.getElementById('header');
    if (scrollY > 20) {
      header.classList.add('nav_mod');
    } else {
      header.classList.remove('nav_mod');
    }
  }, [scrollY]);

  function handleItemClick(id) {
    setSelectedItem(id);
    setIsMenuOpen(false);
  }

  function handleMenuButtonClick() {
    setIsMenuOpen(!isMenuOpen);
  }

  function handleOutsideMenuClick(event) {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target) &&
      !document.getElementById('btn_menu').contains(event.target)
    ) {
      setIsMenuOpen(false);
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleOutsideMenuClick);

    return () => {
      document.removeEventListener('click', handleOutsideMenuClick);
    };
  }, []);


  return (
    <header id="header" className={isMenuOpen ? 'move__content' : ''}>
      <div className='container__header text'>
        <Link className='container__logo' to="/">
          <img className='logo' src="assets/images/logo-sf.png" alt='Logo'/>
        </Link>
        <div className='container__nav'>
          <nav id='nav' className={isMenuOpen ? 'move__nav' : ''} ref={menuRef}>
            <ul>
              <li><Link id='btnhome' className={selectedItem === 'btnhome' ? 'selected' : 'link'} to="/" onClick={() => handleItemClick('btnhome')}>Home</Link></li>
              <li><Link id='btnabout' className={selectedItem === 'btnabout' ? 'selected' : 'link'} to="/about" onClick={() => handleItemClick('btnabout')}>About Me</Link></li>
              <li><Link id='btnservices' className={selectedItem === 'btnservices' ? 'selected' : 'link'} to="/services" onClick={() => handleItemClick('btnservices')}>Services</Link></li>
              <li><Link id='btncontact' className={selectedItem === 'btncontact' ? 'selected' : 'link'} to="/contact" onClick={() => handleItemClick('btncontact')}>Contact</Link></li>
              <li><Link id='btnfaqs' className={selectedItem === 'btnfaqs' ? 'selected' : 'link'} to="/faqs" onClick={() => handleItemClick('btnfaqs')}>FAQs</Link></li>
              <li>
                <Link to='/contact' onClick={() => handleItemClick('btncontact')}>
                  <button type="button" className='btn btn-contactheader btn-lg backgroundpink text'>Contact Silvi</button>
                </Link>
              </li>
            </ul>
          </nav>
            
          <div className="btn__menu" id='btn_menu' onClick={handleMenuButtonClick}>
            <FontAwesomeIcon icon={faBars} />
          </div>
        </div>        
      </div>
    </header>

    
  );
}

export default Header;