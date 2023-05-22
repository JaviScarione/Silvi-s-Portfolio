import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { Link } from 'react-router-dom';
import Aos from 'aos';
import "aos/dist/aos.css"

const SpecializationAreas = () => {

  useEffect(() => {
    Aos.init({duration: 1500});
  }, []);

    return (
      <div data-aos="fade-up" className="row d-flex justify-content-center align-items-center bottom_services backgroundlightpink text colordark">
              
        <div className="container expand">
          <div className="row">
            <div className="expand_text colordark">
              <h3>Want to Expand Your Presence to Spanish Markets?</h3>
              <p>Reach out and let's discuss how I can help.</p>
            </div>
            <div className="buttonContactService">
              <Link to="/contact"><button type="button" className='btn btn-services text'>Contact Me</button></Link>
            </div>
          </div>
        </div>       
      
        <h2 data-aos="fade-up" className="title colorpink">
          Specialization <span className="colorblue">Areas</span>
        </h2>
        <section data-aos="fade-up">
          <h3>Below, you will find my specialization areas for Spanish services.</h3>
          <p>
            If your core business activity is in a different sector, please contact me and I will let you know if I can help. 
            Otherwise, I will try to put you in touch with one of my trusted colleagues to meet your requirements.
          </p>
        </section>

        <div className="container area_container">
          <div className="row">
            <div data-aos="fade-up" className="col-3 col-md-2 offset-md-2 area">
              <FontAwesomeIcon className='area-icon' icon="fa-solid fa-bullhorn" />
              <p text>Marketing and SEO</p>
            </div>
            <div data-aos="fade-up" className="col-3 col-md-2 area">
              <FontAwesomeIcon className='area-icon' icon="fa-solid fa-magnifying-glass" />
              <p text>Market Research</p>
            </div>
            <div data-aos="fade-up" className="col-3 col-md-2 area">
              <FontAwesomeIcon className='area-icon' icon="fa-solid fa-book" />
              <p text>Education</p>
            </div>
            <div data-aos="fade-up" className="col-3 col-md-2 area">
              <FontAwesomeIcon className='area-icon' icon="fa-solid fa-bag-shopping" />
              <p text>e-Commerce</p>
            </div>
          </div>        
        </div>
      </div>      
    );
}

export default SpecializationAreas;
