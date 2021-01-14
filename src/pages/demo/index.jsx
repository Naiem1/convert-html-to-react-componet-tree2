import React from 'react';

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Banner from '../../assets/images/banner2.jpg';

// slick
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
}

const Demo = () => {
  return (
    <div>
      <Slider {...settings} style={{padding: '100px', textAlign: 'center'}}>
          <div style={{background: '#ffff', padding: '100px'}}>
          <img src={Banner} alt=""/>
          </div>
          <div>
          <img src={Banner} alt=""/>
          </div>
          
        </Slider>
    </div>
  );
};

export default Demo;