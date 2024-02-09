import React, { forwardRef } from "react";
import BannerBackground from "../Assets/home-banner-background2.png";
import MicrowaveIcon from '@mui/icons-material/Microwave';
import WifiIcon from '@mui/icons-material/Wifi';

const About = forwardRef((props, ref) => {
  const handleScrollToApartment = (apartmentId) => {
    const apartmentElement = document.getElementById(`apartment-${apartmentId}`);
    if (apartmentElement) {
      apartmentElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div ref={ref} id="about" className="divAbout">
      <div className="about-bannerImage-container">
        <img src={BannerBackground} alt="banner-background" />
      </div>
      <div className="aboutTextos">
        <p className="primary-subheading">DepartamentosSSssSS</p>
        <h1 className="primary-heading">
          Aca podes ver las comodidades que brindan nuestras habitaciones.
        </h1>
        <div className="about-buttons-container">
          {/* Botón para desplazarse a Apart1 */}
          <button onClick={() => handleScrollToApartment(1)} className="btnVerMas">
            Apart 1
          </button>
          {/* Botón para desplazarse a Apart2 */}
          <button onClick={() => handleScrollToApartment(2)} className="btnVerMas">
            Apart 2
          </button>
          {/* Botón para desplazarse a Apart3 */}
          <button onClick={() => handleScrollToApartment(3)} className="btnVerMas">
            Apart 3
          </button>
          {/* Botón para desplazarse a Apart4 */}
          <button onClick={() => handleScrollToApartment(4)} className="btnVerMas">
            Apart 4
          </button>
        </div>
      </div>
    </div>
  );
});

export default About;
