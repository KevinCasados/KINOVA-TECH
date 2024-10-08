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
    <CarouselContainer role="region" aria-label="Image Carousel">
      {slides.map((slide, index) => (
        <CarouselSlide 
          key={index} 
          backgroundImage={slide.backgroundImage} 
          active={index === currentSlide}
          aria-hidden={index !== currentSlide} // Esconder las diapositivas no activas de lectores de pantalla
        >
          <CarouselContent>
            <CarouselTitle>{slide.title}</CarouselTitle>
            <CarouselSubtitle>{slide.subtitle}</CarouselSubtitle>
            <Link to={slide.buttonLink} aria-label={`Navigate to ${slide.buttonText}`}>
              <CarouselButton>{slide.buttonText}</CarouselButton>
            </Link>
          </CarouselContent>
        </CarouselSlide>
      ))}
      <CarouselNav>
        <NavButton 
          onClick={prevSlide} 
          aria-label="Previous Slide" 
          role="button"
        >
          &lt;
        </NavButton>
        <NavButton 
          onClick={nextSlide} 
          aria-label="Next Slide" 
          role="button"
        >
          &gt;
        </NavButton>
      </CarouselNav>
      <IndicatorsContainer role="tablist" aria-label="Slide Navigation">
        {slides.map((_, index) => (
          <Indicator 
            key={index} 
            active={index === currentSlide} 
            onClick={() => goToSlide(index)} 
            aria-label={`Go to slide ${index + 1}`}
            role="tab"
            aria-selected={index === currentSlide} // Indicar que este es el slide seleccionado
          />
        ))}
      </IndicatorsContainer>
    </CarouselContainer>
  );
};

export default Carousel;