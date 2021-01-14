import React from 'react';

const ServiceCard = ({ service }) => {
  const { img, title, details } = service;
  return (
    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
      <div className="service-box">
          <i>
            <img
              src={img}
              alt="service icon"
            />
          </i>
          <h3>{ title }</h3>
          <p>{details} </p>
      </div>
    </div>
  );
};

export default ServiceCard;