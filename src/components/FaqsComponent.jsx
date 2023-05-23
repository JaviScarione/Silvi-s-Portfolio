import { useEffect } from 'react';
import '../css/faqs.css';
import Footer from './FooterComponent';
import { Link } from 'react-router-dom';
import Aos from 'aos';
import "aos/dist/aos.css"

function Faqs() {

  useEffect(() => {
    Aos.init({duration: 1500});
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='container__faqs text-center'>
        <div data-aos="fade-right" className="faqs">
            <h1 className='title faqs-title colorblue'><span className='color'>F</span>requently <span className='color'>A</span>sked <span className='color'>Q</span>uestion<span className='color'>s</span></h1>
            <div className="space text">
                <h2 data-aos="fade-up" className='colordark'>How are the rates for Spanish translation services calculated?</h2>
                <div className="text-start">
                    <h5 data-aos="fade-up">Rates will depend on the type of Spanish translation service you require. For example,</h5>
                    <ul className='list'>
                        <li data-aos="fade-up">Spanish translation services rates are typically calculated based on the number of words of the content that requires translation.</li>
                        <li data-aos="fade-up">Spanish subtitling service rates depend on the number of minutes that require subtitles.</li>
                        <li data-aos="fade-up">Spanish SEO translation rates are typically calculated on a per-hour basis.</li>
                    </ul>
                    <p data-aos="fade-up">Rates also vary depending on other factors, including text difficulty, urgency, volume, video quality, reference material, and more. </p>
                </div>
                <h2 data-aos="fade-up" className='colordark'>What payment methods do you accept?</h2>
                <h5 data-aos="fade-up" className='text-start'>I accept bank transfers to a US or EU account, Wise, and cryptocurrency.</h5>
                <h2 data-aos="fade-up" className='colordark'>I have a meeting next week. Could you come and translate for me?</h2>
                <h5 data-aos="fade-up" className='text-start'>
                    Unfortunately, no. What you would require is an interpreter, rather than a translator.
                    The difference between a translator and an interpreter is that the former work
                    with written content, while the latter work with spoken content.
                </h5>
            </div>
        </div>


      <div className="d-flex row question_container justify-content-center align-items-center">
        <div className="container question">
          <div data-aos="fade-up" className="row">
            <div className="question_text textlight">
              <h3>If You Have any Questions Please Contact Me!</h3>
            </div>
            <div className="buttonContactFaqs">
              <Link to="/contact"><button type="button" className='btn btn-question text'>Contact Me</button></Link>
            </div>
          </div>
        </div> 
      </div>         
      <Footer />
    </div>
  );
}

export default Faqs;
