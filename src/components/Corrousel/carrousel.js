import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  CarouselContainer,
  CarouselSlide,
  CarouselContent,
  CarouselTitle,
  CarouselSubtitle,
  CarouselButton,
  CarouselNav,
  NavButton,
  IndicatorsContainer,
  Indicator
} from "./styles";
import CarrouselImage1 from "../../assets/banner-slider.jpg";
import CarrouselImage2 from "../../assets/pro-gamer-carrousel.jpg";

const slides = [
  {
    title: "ANOTHER LEVEL",
    subtitle: "Explore new dimensions of gaming. Be part of the evolution and take your game to the next level.",
    buttonText: "SHOP NOW",
    buttonLink: "/products",
    backgroundImage: CarrouselImage1
  },
  {
    title: "THERE'S LEVELS TO PLAY",
    subtitle: "We all play. In our own way. For our own reasons. And that's what makes this community we've built together so amazing.",
    buttonText: "GET STARTED",
    buttonLink: "/login",
    backgroundImage: CarrouselImage2
  }
];

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <CarouselContainer>
      {slides.map((slide, index) => (
        <CarouselSlide key={index} backgroundImage={slide.backgroundImage} active={index === currentSlide}>
          <CarouselContent>
            <CarouselTitle>{slide.title}</CarouselTitle>
            <CarouselSubtitle>{slide.subtitle}</CarouselSubtitle>
            <Link to={slide.buttonLink}>
              <CarouselButton>{slide.buttonText}</CarouselButton>
            </Link>
          </CarouselContent>
        </CarouselSlide>
      ))}
      <CarouselNav>
        <NavButton onClick={prevSlide}>&lt;</NavButton>
        <NavButton onClick={nextSlide}>&gt;</NavButton>
      </CarouselNav>
      <IndicatorsContainer>
        {slides.map((_, index) => (
          <Indicator 
            key={index} 
            active={index === currentSlide} 
            onClick={() => goToSlide(index)} 
          />
        ))}
      </IndicatorsContainer>
    </CarouselContainer>
  );
};

export default Carousel;