import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Image from "../css/images/img.png";

const CarouserServices = () => {
  return (
    <div className="carousel">
      <Carousel variant="dark" indicators={false} className="text d-flex">
        <Carousel.Item>
          <div className="container">
            <div className="row justify-content-center align-items-center carouselitem">
              <div className="col-5">
                <img className="carouselImg" src={Image} alt="First slide" />
              </div>
              <div className="col-7 justify-content-center align-items-center">
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
            <div className="row justify-content-center align-items-center carouselitem">
              <div className="col-7 justify-content-center align-items-center">
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
              <div className="col-5">
                <img
                  className="carouselImg d-block"
                  src={Image}
                  alt="First slide"
                />
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="container">
            <div className="row justify-content-center align-items-center carouselitem">
              <div className="col-5">
                <img
                  className="carouselImg d-block"
                  src={Image}
                  alt="First slide"
                />
              </div>
              <div className="col-7 justify-content-center align-items-center">
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
            <div className="row justify-content-center align-items-center carouselitem">
              <div className="col-7 justify-content-center align-items-center">
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
              <div className="col-5">
                <img
                  className="carouselImg d-block"
                  src={Image}
                  alt="First slide"
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
