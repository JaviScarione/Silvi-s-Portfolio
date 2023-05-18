import React from "react";
import "../css/services.css";
import CarouserServices from "./CarouserServices";
import SpecializationAreas from "./SpecializationAreas";
import Footer from "./FooterComponent";

function Services() {
  return (
    <div className="container__services text-center">
      <div className="row d-flex justify-content-center top_services">
        <div className="col-12 title">
          <h1 className="colorblue">Spanish Translation <span className="colorpink">Services</span></h1>
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
