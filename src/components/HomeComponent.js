import React from 'react';
import '../css/home.css';
import '../js/script';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



function Home() {
  return (
    <div className='container__home container__all' id="container__all">
  
      <div className='cover'>

        <div className='container__cover'>

          <div className='container__info'>
            <a href='/'>        
              <img className='logo' src="assets/images/en-es.png" alt='logo'/>
            </a>
            <h2 className='title colorblue'>Nice to <spam className='colorpink'>e-Meet</spam> You</h2>
            <h1 className='text colordark'>I am Silvi Nuñez, <spam className='colorblue'>Professional Spanish Translator</spam></h1>
            <p className='text colordark'>Helping companies and individuals reach Spanish markets<br/>through English &lt;&gt; Spanish Translation Services.</p>
            <a href='/services'>
              <button type="button" className='btn btn-home btn-lg text'>All Spanish Services</button>
            </a>              
            <ul className="container__social list-unstyled d-flex">
              <li><a className="text-muted" href="https://twitter.com/silvina_nunez" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className='social_logo' icon="fa-brands fa-twitter" size='xl'/></a></li>
              <li><a className="text-muted" href="https://www.linkedin.com/in/silvinunez/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className='social_logo' icon="fa-brands fa-linkedin-in" size='xl'/></a></li>
              <li><a className="text-muted" href="https://www.facebook.com/silnunez" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className='social_logo' icon="fa-brands fa-facebook-f" size='xl'/></a></li>
              <li><a className="text-muted" href="https://www.instagram.com/silnuu/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className='social_logo' icon="fa-brands fa-instagram" size='xl'/></a></li>            
            </ul>
          </div>
        
        </div>

      </div>
      
    </div>
  );
}

export default Home;