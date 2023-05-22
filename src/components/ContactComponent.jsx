import { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import emailjs from 'emailjs-com';
import Footer from './FooterComponent';
import '../css/contact.css';
import Aos from 'aos';
import "aos/dist/aos.css"


function Contact() {

  useEffect(() => {
    Aos.init({duration: 1500});
  }, []);

  let navigate = useNavigate()
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_p71fiyn', 'template_im8q8n9', form.current, '2ZlaBfmFfG6qi-P3-')
      .then((result) => {
        console.log(result.text);
        alert('Email sent successfully');
        e.target.reset()
        navigate("/") 
      }, (error) => {
        console.log(error.text);
        alert('Failed to send email');
      });
  };


  return (
    <div data-aos="fade-right" className='container__contact text-center'>
        <div className="contact">
            <h1 className='title faqs-title colorpink'>Contact <span className='colorblue'>Me</span></h1>
            <h5 className='colordark text'>I am always delighted to build new client relationships. Reach out and let's discuss your needs.</h5>
            <div className="form text my-5">
              <form ref={form} onSubmit={sendEmail}>
                <div className="row text-start">
                  <div data-aos="fade-up" className="col col-sm-6">
                    <div className="mb-3">
                        <label htmlFor="firstname" className="form-label ms-3">First Name</label>
                        <input type="text" className="form-control" name="firstname" required />
                    </div>
                    <div data-aos="fade-up" className="mb-3">
                        <label htmlFor="lastname" className="form-label ms-3">Last Name</label>
                        <input type="text" className="form-control" name="lastname" required />
                    </div>
                    <div data-aos="fade-up" className="mb-3">
                        <label htmlFor="email" className="form-label ms-3">Your email</label>
                        <input  type="email" className="form-control" name="email" required/>
                    </div>
                  </div>
                  <div data-aos="fade-up" className="col col-sm-6">
                    <div className="mb-3 comment">
                        <label htmlFor="message" className="form-label ms-3">Your message:</label>
                        <textarea type="text" className="form-control comment" name="message" required/>
                    </div>
                  </div>
                  <div>
                    <div data-aos="fade-up" className="form-check text-start mt-5 mb-4 check">
                      <input className="form-check-input" type="checkbox" name="check" required />
                      <label className="form-check-label" htmlFor="check">
                        By checking this box and submitting your information, you are granting us permission to email you. You may unsubscribe at any time.
                      </label>
                    </div>
                  </div>
                  <div data-aos="fade-up" className="text-center my-3">
                      <button type="submit" className="btn btn-contact">Send Message</button>
                  </div>                
                </div>
              </form>
            </div>
        </div>     
      <Footer />
    </div>
  );
}

export default Contact;