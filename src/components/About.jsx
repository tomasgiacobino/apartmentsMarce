import React from "react";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={""} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">Departamentos</p>
        <h1 className="primary-heading">
          Aca podes ver las comodidades que brindan nuestras habitaciones.
        </h1>
        <div className="about-buttons-container">
            <button className="secondary-button">Learn More</button>
            <button className="watch-video-button"><BsFillPlayCircleFill/>Watch video</button>
        </div>
      </div>
    </div>
  );
};

export default About;
