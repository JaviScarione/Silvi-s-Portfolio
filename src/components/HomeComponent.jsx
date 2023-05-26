import React, { useEffect } from 'react';
import '../css/home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Aos from 'aos';
import "aos/dist/aos.css"

function Home() {

  useEffect(() => {
    Aos.init({duration: 2000});
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='container__home'>
  
      <div className='cover'>

        <div className='container__cover'>

          <div data-aos="fade-right" className='container__info'>
            <img className='enes_logo' src="assets/images/en-es.png" alt='en-es img'/>            
            <h2 className='title colorblue'>Nice to <span className='colorpink'>e-Meet</span> You</h2>
            <h1 className='text colordark'>I am Silvi Nuñez, <span className='colorblue'>Professional Spanish Translator</span></h1>
            <p className='text colordark mb-0'>Helping companies and individuals reach Spanish markets</p>
            <p className='text colordark mt-0 pt-0 mb-3'>through English &lt;&gt; Spanish Translation Services.</p>
            <a href='/services'>
              <button type="button" className='btn btn-home btn-lg text'>Spanish Translation Services</button>
            </a>

            <ul className="container__social list-unstyled d-flex">
              <li><a className="text-muted" href="https://www.linkedin.com/in/silvinunez/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className='social_logo' icon="fa-brands fa-linkedin-in" size='xl'/></a></li>
              <li><a className="text-muted" href="https://twitter.com/silvina_nunez" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className='social_logo' icon="fa-brands fa-twitter" size='xl'/></a></li>
              <li><a href="https://www.proz.com/translator/2189278" target="_blank" rel="noopener noreferrer"><img className='prozLogo' src="assets/images/proz.png" alt="Proz.com" /></a></li>
            </ul>
          </div>
        
        </div>

      </div>
      
    </div>
  );
}

export default Home;