import { useEffect } from "react";
import "../css/services.css";
import CarouserServices from "./CarouserServices";
import SpecializationAreas from "./SpecializationAreas";
import Footer from "./FooterComponent";
import Aos from 'aos';
import "aos/dist/aos.css"

function Services() {

  useEffect(() => {
    Aos.init({duration: 2000});
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container__services text-center">
      <div data-aos="zoom-in" className="row d-flex justify-content-center top_services">
        <div className="col-12 title">
          <h1 className="colorpink">Spanish Translation <span className="colorblue">Services</span></h1>
          <h2 className="text colordark">
            I have been supporting clients from all over the globe with Spanish
            translation services, including:
          </h2>
        </div>
      </div>
      <CarouserServices />
      <SpecializationAreas />
      <Footer />
    </div>
  );
}

export default Services;
