import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const CarouselComponent = () => {
  return (
    <Carousel>
      <div>
        <img src={require("assets/img/carousel/1.jpeg")} alt="Image 1" />
      </div>
      <div>
        <img src={require("assets/img/carousel/3.jpeg")} alt="Image 1" />
      </div>
      <div>
        <img src={require("assets/img/carousel/4.jpeg")} alt="Image 1" />
      </div>
      <div>
        <img src={require("assets/img/carousel/5.jpeg")} alt="Image 1" />
      </div>
    </Carousel>
  );
};

export default CarouselComponent;
