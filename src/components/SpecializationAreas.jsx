import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { Link } from 'react-router-dom';

const SpecializationAreas = () => {
    return (
      <div className="row d-flex justify-content-center align-items-center bottom_services backgroundpink text colordark">
              
        <div className="container expand">
          <div className="row align-items-center">
            <div className="col-7 offset-1 expand_text colordark">
              <h3>Want to Expand Your Presence to Spanish Markets?</h3>
              <p>Reach out and let's discuss how I can help.</p>
            </div>
            <div className="col-3">
              <Link to="/contact"><button type="button" className='btn btn-services text'>Contact Me</button></Link>
            </div>
          </div>
        </div>       
      
        <h2 className="title">
          Specialization <span className="colorblue">Areas</span>
        </h2>
        <section>
          <h3>Below, you will find my specialization areas for Spanish services.</h3>
          <p>
            If your core business activity is in a different sector, please contact me and I will let you know if I can help. 
            Otherwise, I will try to put you in touch with one of my trusted colleagues to meet your requirements.
          </p>
        </section>

        <div className="container area_container">
          <div className="row">
            <div className="col-2 offset-md-2 area">
              <FontAwesomeIcon className='area-icon' icon="fa-solid fa-bullhorn" />
              <p text>Marketing and SEO</p>
            </div>
            <div className="col-2 area">
              <FontAwesomeIcon className='area-icon' icon="fa-solid fa-magnifying-glass" />
              <p text>Market Research</p>
            </div>
            <div className="col-2 area">
              <FontAwesomeIcon className='area-icon' icon="fa-solid fa-book" />
              <p text>Education</p>
            </div>
            <div className="col-2 area">
              <FontAwesomeIcon className='area-icon' icon="fa-solid fa-bag-shopping" />
              <p text>e-Commerce</p>
            </div>
          </div>        
        </div>
      </div>      
    );
}

export default SpecializationAreas;
