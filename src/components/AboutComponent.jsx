import {useEffect} from 'react';
import '../css/about.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Footer from './FooterComponent';
import ClientsReviews from "./ClientsReviews";
import Aos from 'aos';
import "aos/dist/aos.css"

function About() {

  useEffect(() => {
    Aos.init({duration: 2000});
  }, []);

  return (
    <div className='container__about text-center'>
      <div data-aos="fade-right"  className='row d-flex justify-content-center top'>
        <div className='col-12 title'>
          <h1 className='colorblue h1'>About <span className='colorpink'>Me<span className='colorblue'>!</span></span></h1>
        </div>
        <div className='col col-md-12 col-xl-7 text_about'>
          <h2 className='text colorblue h2'>Hello! I am <span className='colorpink'>Silvi Nuñez</span></h2>
          <p className='text colordark'>A professional Spanish translator graduated 
          from the University of Cordoba, Argentina. After earning my translation degree,
           I entered the marketing world to explore my passion for digital marketing, branding, 
           and international business development.</p>
           <h2 className='text colorblue h2'>What <span className='colorpink'>I Can Do</span> for You</h2>
           <p className='text colordark'>I can help you introduce your product or services to Spanish-speaking audiences through
            Spanish translation services. Whether it is a website, email marketing, or a sales brochure,
             I ensure that the message sounds natural and achieves maximum impact in the Spanish audience.
              My role is to facilitate communication and inspire confidence by speaking the client's language.</p>
          <a href='/services'>
            <button type="button" className='btn btn-about btn-lg text'>Spanish Translation Services</button>
          </a> 
        </div>
        <div className='image col-md-5 image'>
        </div>
      </div>
      <div data-aos="fade-up"  className='row d-flex justify-content-center align-items-center bottom backgroundlightpink text'>
        <h2 className='title colorblue'>Why My Clients <span className='colorpink'>Choose Me</span></h2>
        <section>
          <p>These are some reasons why my clients choose me as their go-to professional Spanish translator:</p>
          <div  className='row row-cols-3 reasons'>
            <div className='reason'>
              <p className='first_p'><FontAwesomeIcon className='colorblue' icon="fa-solid fa-medal" size='xl'/> Creative, quality translations.</p>
            </div>
            <div className='reason'>
              <p><FontAwesomeIcon className='colorblue' icon="fa-solid fa-language" size='xl'/> Expert knowledge of Spanish markets.</p>
            </div>
            <div className='reason'>
              <p><FontAwesomeIcon className='colorblue' icon="fa-solid fa-business-time" size='xl'/> Responsive and always on time.</p>
            </div>
          </div>
        </section>        
      </div>
      <div className='data backgroundlightpink text'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div data-aos="fade-up" className='col-6 col-md-4 item'>
              <p>+8</p>
              <p>Years of experience</p>
            </div>
            <div data-aos="fade-up" className='col-6 col-md-4 item'>
              <p>+350k</p>
              <p>Translated words</p>
            </div>
            <div data-aos="fade-up" className='col-12 col-md-4 item'>
              <p>+400</p>
              <p>Spanish translation projects</p>
            </div>
          </div>
        </div>
      </div>
      <ClientsReviews />
      <Footer />
    </div>
  );
}

export default About;