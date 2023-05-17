import React from 'react';
import '../css/footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Footer() {

  let date = new Date();

  return (    
    <div className='backgroundblue footer'>
      <div className='container'>
          <footer className="row row-cols-1 row-cols-md-4 d-flex flex-wrap align-items-center">
            <p className="signature col col-md-4">&copy; {date.getFullYear()} Silvi Nuñez.</p>

            <ul className="social nav col col-md-4 d-flex align-items-center justify-content-center text-decoration-none list-unstyled">
              <li className="mx-3"><a href="https://twitter.com/silvina_nunez" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon="fa-brands fa-twitter" size="xl" /></a></li>
              <li className="mx-3"><a href="https://www.linkedin.com/in/silvinunez/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon="fa-brands fa-linkedin" size="xl" /></a></li>
              <li className="mx-3"><a href="https://www.facebook.com/silnunez" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon="fa-brands fa-facebook" size="xl" /></a></li>
              <li className="mx-3"><a href="https://www.instagram.com/silnuu/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon="fa-brands fa-instagram" size="xl" /></a></li>
            </ul>

            <ul className="links nav col col-md-4 d-flex align-items-center">
              <li className="mx-3"><a href="/" className="text-decoration-none">Home</a></li>
              <li className="mx-3"><a href="/about" className="text-decoration-none">About</a></li>
              <li className="mx-3"><a href="/services" className="text-decoration-none">Services</a></li>
              <li className="mx-3"><a href="/faqs" className="text-decoration-none">FAQs</a></li>
            </ul>
          </footer>
      </div>
    </div>
  );
}

export default Footer;