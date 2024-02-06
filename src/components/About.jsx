import React from "react";
import { BsFillPlayCircleFill } from "react-icons/bs";
import BannerBackground from "../Assets/home-banner-background2.png";

const About = () => {
  return (
    <div id="about" className="divAbout">
      <div className="about-bannerImage-container">
          <img src={BannerBackground} alt="banner-background" />
        </div>
      <div className="aboutTextos">
        <p className="primary-subheading">Departamentos</p>
        <h1 className="primary-heading">
          Aca podes ver las comodidades que brindan nuestras habitaciones.
        </h1>
        <div className="about-buttons-container">
            <button className="btnVerMas">Ver Más</button>
            <button className="btnVideo"><BsFillPlayCircleFill/>Ver Video</button>
        </div>
      </div>
    </div>
  );
};

export default About;
