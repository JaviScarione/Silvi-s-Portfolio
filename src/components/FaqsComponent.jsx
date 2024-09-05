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
        <div className="faqs">
            <h1 data-aos="fade-right" className='title faqs-title colorblue'><span className='color'>F</span>requently <span className='color'>A</span>sked <span className='color'>Q</span>uestions</h1>
            <div className="space text">
                <h5 className='colordark bold'>Can you provide transcreation services to adapt my marketing content for the Spanish-speaking market?</h5>
                <h5 className='mt-2'>Absolutely! Transcreation is a specialized service that goes beyond translation. It involves adapting the content creatively and culturally to
                   ensure it resonates with the target audience. As a Spanish translator experienced in marketing and branding, I can help you with transcreation to
                    ensure your marketing messages are culturally relevant, engaging, and impactful for the Spanish-speaking market.</h5>
                <h5 data-aos="fade-up" className='colordark bold'>Do you have experience in localizing websites for the Spanish-speaking audience?</h5>
                <h5 data-aos="fade-up" className='mt-2'>Yes, I have extensive experience in website localization for the Spanish-speaking market. Website localization involves 
                adapting the content, language, design, and functionality of a website to suit the preferences and cultural nuances of the target audience. 
                I can work closely with your team to ensure that your website is effectively localized for the Spanish-speaking market, allowing you to connect 
                with your audience on a deeper level.</h5>
                <h5 data-aos="fade-up" className='colordark bold'>Can you provide Spanish keyword research and optimization for SEO purposes?</h5>
                <h5 data-aos="fade-up" className='mt-2'>Certainly! Keyword research and optimization are crucial for effective SEO strategies. I can assist you in identifying 
                relevant keywords and optimizing your Spanish content to improve its visibility in search engine results. By conducting thorough keyword research 
                and implementing best SEO practices, I can help you increase your online presence and reach your target audience effectively in the 
                Spanish-speaking market.</h5>

                <h5 data-aos="fade-up" className='colordark bold'>How are rates for Spanish translation services calculated?</h5>
                <h5 data-aos="fade-up" className='mt-2'>The rates for Spanish translation services are determined based on various factors. The specific type of service you require 
                will play a role in how the rates are calculated. Here are some examples:</h5>
                <ul className='list'>
                  <li data-aos="fade-up"><h5>Spanish translation services: Rates are typically based on the word count of the content that needs to be translated. 
                    The total number of words in the source document helps determine the cost.</h5></li>
                  <li data-aos="fade-up"><h5>Spanish subtitling services: Rates are determined by the duration of the video or audio that requires subtitles. The number 
                    of minutes or hours in the content is considered when calculating the pricing.</h5></li>
                  <li data-aos="fade-up"><h5>Spanish SEO translation: Rates for SEO translation are often calculated on an hourly basis. The complexity of the SEO content 
                    and the time required to optimize it for the Spanish audience influence the pricing.</h5></li>
                </ul>
                <h5 data-aos="fade-up" className='mt-2'>Additionally, other factors can affect the rates, such as the difficulty of the text, urgency of the project, volume of work, video 
                quality (for subtitling), availability of reference material, and more. To provide you with an accurate quote, it's best to discuss the specific details of 
                your project with me.</h5>

                <h5 data-aos="fade-up" className='colordark bold'>What payment methods do you accept?</h5>
                <h5 data-aos="fade-up" className='mt-2'>I offer several convenient payment methods for my services. These include:</h5>
                <ul className='list'>
                  <li data-aos="fade-up"><h5>Bank transfers: You can make payments through bank transfers to either a US or EU account. I will provide you with the necessary 
                    banking details for a smooth transaction.</h5></li>
                  <li data-aos="fade-up"><h5>Wise: Wise is a secure online platform that allows for easy international money transfers. It provides competitive exchange rates 
                    and low fees, making it a convenient option for clients worldwide.</h5></li>
                  <li data-aos="fade-up"><h5>Cryptocurrency: If you prefer to pay with cryptocurrency, I accept various cryptocurrencies as a form of payment. We can discuss 
                    the specific cryptocurrencies I accept during our payment arrangements.</h5></li>
                </ul>
                <h5 data-aos="fade-up" className='mt-2'>Please note that the availability of payment methods may vary depending on your location and the specific details of your project. 
                Feel free to reach out to me to discuss the most suitable payment method for your needs.</h5>

                <h5 data-aos="fade-up" className='colordark bold'>I have a meeting next week. Could you come and translate for me?</h5>
                <h5 data-aos="fade-up" className='mt-2'>As a translator, my expertise lies in working with written content rather than providing on-site 
                interpretation services. If you require language support during a meeting or event, you would need an interpreter. Interpreters specialize 
                in verbal communication and can assist with live translation during conversations, meetings, conferences, and other spoken interactions.</h5>
                <h5 data-aos="fade-up" className='mt-2'>If you require an interpreter, I can provide recommendations and guidance on finding a qualified 
                professional to meet your specific needs. Feel free to reach out to me for assistance in finding the right interpreter for your meeting.</h5>
                
            </div>
        </div>


      <div data-aos="fade-up"  className="d-flex row question_container justify-content-center align-items-center">
        <div className="container question">
          <div className="row">
            <div className="question_text textlight">
              <h3>If You Have any Questions, Please Contact Me.</h3>
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






//<h2 data-aos="fade-up" className='colordark'>How are the rates for Spanish translation services calculated?</h2>
//                <div className="text-start">
//                    <h5 data-aos="fade-up">Rates will depend on the type of Spanish translation service you require. For example,</h5>
//                    <ul className='list'>
//                        <li data-aos="fade-up">Spanish translation services rates are typically calculated based on the number of words of the content that requires translation.</li>
//                        <li data-aos="fade-up">Spanish subtitling service rates depend on the number of minutes that require subtitles.</li>
//                        <li data-aos="fade-up">Spanish SEO translation rates are typically calculated on a per-hour basis.</li>
//                    </ul>
//                    <p data-aos="fade-up">Rates also vary depending on other factors, including text difficulty, urgency, volume, video quality, reference material, and more. </p>
//                </div>
//                <h2 data-aos="fade-up" className='colordark'>What payment methods do you accept?</h2>
//                <h5 data-aos="fade-up" className='text-start'>I accept bank transfers to a US or EU account, Wise, and cryptocurrency.</h5>
//                <h2 data-aos="fade-up" className='colordark'>I have a meeting next week. Could you come and translate for me?</h2>
//                <h5 data-aos="fade-up" className='text-start'>
//                    Unfortunately, no. What you would require is an interpreter, rather than a translator.
//                    The difference between a translator and an interpreter is that the former work
//                    with written content, while the latter work with spoken content.
//                </h5>
