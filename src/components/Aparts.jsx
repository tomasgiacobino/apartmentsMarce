import React, { useEffect, useState } from "react";
import ApartsImages from "./ApartsImages";

const Apart = ({ apartmentsData }) => {
  const [apartments, setApartments] = useState([]);

  useEffect(() => {
    const updatedApartments = apartmentsData.map((apartment) => {
      const imagesArray = Object.values(apartment.images);
      return {
        ...apartment,
        images: imagesArray,
      };
    });

    setApartments(updatedApartments);
  }, [apartmentsData]);

  return (
    <div className="apart-container">
      {apartments.map((apartment) => (
        <div key={apartment.id} className="apartment">
          <div className="text-container">
            <h1 className="apart-title">{apartment.title}</h1>
            <div className="apart-description">
              {apartment.description.map((desc, index) => (
                <p key={index}>{desc}</p>
              ))}
            </div>
          </div>
          <div className="image-gallery">
            <ApartsImages images={apartment.images} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Apart;
