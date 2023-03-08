import React from 'react';
import '../css/footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Footer() {
  return (    
    <div className='background border-top'>
      <div className='container'>
          <footer className="footer row row-cols-1 row-cols-md-4 d-flex flex-wrap align-items-center py-4">
            <p className="signature col col-md-4 my-4 my-md-0 px-0 text-muted">&copy; 2023 Silvi Nuñez.</p>

            <ul className="social nav col col-md-4 d-flex align-items-center justify-content-center my-4 my-md-0 me-md-auto px-0 link-dark text-decoration-none list-unstyled">
              <li className="mx-3"><a className="text-muted" href="/"><FontAwesomeIcon icon="fa-brands fa-twitter" size="xl" /></a></li>
              <li className="mx-3"><a className="text-muted" href="/"><FontAwesomeIcon icon="fa-brands fa-linkedin" size="xl" /></a></li>
              <li className="mx-3"><a className="text-muted" href="/"><FontAwesomeIcon icon="fa-brands fa-facebook" size="xl" /></a></li>
              <li className="mx-3"><a className="text-muted" href="/"><FontAwesomeIcon icon="fa-brands fa-instagram" size="xl" /></a></li>
            </ul>

            <ul className="links nav col col-md-4 d-flex align-items-center justify-content-center my-4 my-md-0 me-md-auto px-0">
              <li className="mx-3"><a href="/" className="text-muted text-decoration-none">Home</a></li>
              <li className="mx-3"><a href="/" className="text-muted text-decoration-none">Features</a></li>
              <li className="mx-3"><a href="/" className="text-muted text-decoration-none">Pricing</a></li>
              <li className="mx-3"><a href="/" className="text-muted text-decoration-none">FAQs</a></li>
            </ul>
          </footer>
      </div>
    </div>
  );
}

export default Footer;