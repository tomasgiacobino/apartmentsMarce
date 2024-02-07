import React from 'react';
import ApartsImages from './ApartsImages';

const Apart = ({ apartmentsData }) => {
  return (
    <div className="apart-container">
      {apartmentsData.map((apartment) => (
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
