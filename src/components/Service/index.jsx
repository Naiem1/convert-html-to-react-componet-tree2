import React from 'react';
import data from '../../Data';
import SectionHeader from '../SectionHeader';
import ServiceCard from '../ServiceCard';

const Service = () => {

  const { highlighted, strong, desc } = data.service;
  console.log(data.service);

  return (
    <div className="service">
      <SectionHeader
        highlighted={highlighted}
        strong={strong}
        dis={desc}
      />
      <div className="container">
        <div className="row">
          {
            data.service.serviceCard.map(service => (
            <ServiceCard service={ service }/>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Service;