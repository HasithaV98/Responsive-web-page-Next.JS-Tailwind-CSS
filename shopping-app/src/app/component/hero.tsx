"use client"
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; // Import slick-carousel CSS
import 'slick-carousel/slick/slick-theme.css'; // Import slick-carousel theme CSS

import Slide from './slide';

const Hero = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: false,
  };

  const slideData = [
    {
      id: 1,
      img: '/1.jpg',
      title:'Keeps your body and muscle strong and flexible'
    },
    {
      id: 2,
      img: '/5.jpg',
      title:'Developing of the body through exercise and diet'
    },
    {
      id: 3,
      img: '/3.webp',
      title:'Food rich in proteins'
      
    },
  ];

  return (
    <div>
      <div className="container pt-6 lg:pt-0">
        <Slider {...settings}>
          {slideData.map((item) => (
            <Slide key={item.id} img={item.img} title={item.title} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
