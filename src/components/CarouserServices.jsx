import { useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import Aos from 'aos';
import "aos/dist/aos.css"

const CarouserServices = () => {

  useEffect(() => {
    Aos.init({duration: 1500});
  }, []);

  return (
    <div data-aos="fade-right" className="carousel_container">
      <Carousel variant="dark" indicators={false} className="text carousel">
        <Carousel.Item>
          <div className="container">
            <div className="row carouselitem">
              <div className="col col-md-3">
                <img className="carouselImg" src="https://images.builderservices.io/s/cdn/v1.0/i/m?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1602191595949-1b1e5fb5634a%3Fcrop%3Dentropy%26cs%3Dtinysrgb%26fit%3Dmax%26fm%3Djpg%26ixid%3DMnw1NTEzfDB8MXxzZWFyY2h8MzJ8fHNwYW5pc2h8ZW58MHx8fHwxNjY4NDI0NzY1%26ixlib%3Drb-4.0.3%26q%3D80%26w%3D600%26utm_source%3Dendurance-innovation%26utm_medium%3Dreferral" alt="Spanish Translations & Localizations" />
              </div>
              <div className="col col-md-7">
                <h3>Spanish Translations & Localizations</h3>
                <p>
                  Looking to translate your company's content into Spanish? Look
                  no further! I offer professional translation services for a
                  variety of materials, including email marketing campaigns,
                  newsletters, social media posts, surveys, courses, websites,
                  and blogs. With my expertise in both English and Spanish, I
                  can provide accurate and high-quality translations that
                  effectively communicate your message to your Spanish-speaking
                  audience. Let me help you expand your reach and connect with a
                  wider audience today!
                </p>
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="container">
            <div className="row carouselitem">
              <div className="col col-md-7">
                <h3>Spanish SEO Translations</h3>
                <p>
                  Are you looking to boost your website visibility and increase
                  traffic from Spanish-speaking markets? If so, I can assist you
                  by optimizing your website with effective Spanish keyword
                  research and other essential SEO practices. By incorporating
                  targeted keywords and optimizing your website for Spanish
                  search engines, I can help improve your website's ranking,
                  increase visibility, and drive more traffic to your website.
                  Don't miss out on the opportunity to expand your business into
                  the Spanish-speaking market - contact me today to get started!
                </p>
              </div>
              <div className="col col-md-3">
                <img
                  className="carouselImg"
                  src="https://images.builderservices.io/s/cdn/v1.0/i/m?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1560472354-b33ff0c44a43%3Fcrop%3Dentropy%26cs%3Dtinysrgb%26fit%3Dmax%26fm%3Djpg%26ixid%3DMnw1NTEzfDB8MXxzZWFyY2h8Mnx8c2VvfGVufDB8fHx8MTY2ODQyNDY2MA%26ixlib%3Drb-4.0.3%26q%3D80%26w%3D600%26utm_source%3Dendurance-innovation%26utm_medium%3Dreferral"
                  alt="Spanish SEO Translations"
                />
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="container">
            <div className="row carouselitem">
              <div className="col col-md-3">
                <img
                  className="carouselImg"
                  src="https://images.builderservices.io/s/cdn/v1.0/i/m?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1556196148-1fb724238998%3Fcrop%3Dentropy%26cs%3Dtinysrgb%26fit%3Dmax%26fm%3Djpg%26ixid%3DMnw1NTEzfDB8MXxzZWFyY2h8MjR8fGhlYWRwaG9uZXxlbnwwfHx8fDE2Njg0MjQ2MzM%26ixlib%3Drb-4.0.3%26q%3D80%26w%3D600%26utm_source%3Dendurance-innovation%26utm_medium%3Dreferral"
                  alt="Spanish Transcription"
                />
              </div>
              <div className="col col-md-7">
                <h3>Spanish Transcription</h3>
                <p>
                  Are you interested in making your multimedia content more
                  accessible to Spanish-speaking audiences? Look no further! I
                  provide transcription services for audio and visual content,
                  allowing you to reach a wider audience with your message. By
                  transcribing your content, I can help improve its
                  accessibility , making it easier for Spanish-speaking
                  audiences to understand and engage with your message. Let me
                  help you make your content more inclusive and reach a larger
                  audience - contact me today to learn more!
                </p>
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="container">
            <div className="row carouselitem">
              <div className="col col-md-7">
                <h3>Spanish Subtitling</h3>
                <p>
                  Do you want to expand your channel's reach and make your video
                  content more accessible to Spanish-speaking audiences? If so,
                  I can help you by adding high-quality subtitles to your videos
                  . With my expertise in English and Spanish, I can provide
                  accurate and clear subtitles that effectively convey your
                  message to Spanish-speaking viewers. By adding subtitles to
                  your videos, you can broaden your audience and increase
                  engagement with your content. Don't miss out on the
                  opportunity to connect with a wider audience - contact me
                  today to discuss your subtitle needs!
                </p>
              </div>
              <div className="col col-md-3">
                <img
                  className="carouselImg"
                  src="https://images.builderservices.io/s/cdn/v1.0/i/m?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1517669137467-b2c221703e93%3Fcrop%3Dentropy%26cs%3Dtinysrgb%26fit%3Dmax%26fm%3Djpg%26ixid%3DMnw1NTEzfDB8MXxzZWFyY2h8MXx8c3VidGl0bGV8ZW58MHx8fHwxNjY4NDI0NTMw%26ixlib%3Drb-4.0.3%26q%3D80%26w%3D600%26utm_source%3Dendurance-innovation%26utm_medium%3Dreferral"
                  alt="Spanish Subtitling"
                />
              </div>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouserServices;
