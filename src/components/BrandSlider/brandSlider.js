import React, { useEffect } from 'react';
import { SliderContainer, SliderWrapper, BrandLogo, Title } from './styles';
import logo1 from '../../assets/logitech-logo.png';
import logo2 from '../../assets/Logo_Razer.png';
import logo3 from '../../assets/logo_rog.png';
import logo4 from '../../assets/logo-corsair.png';
import logo5 from '../../assets/logo-amd.png';
import logo6 from '../../assets/logo-msi.png';
import ScrollReveal from 'scrollreveal';

const BrandSlider = () => {

  useEffect(() => {
    const srbrand = ScrollReveal({
        distance: "50px",
        duration: 1500,
        delay: 200,
        reset: false,
    });
    
    // ScrollReveal para la imagen de fondo
    srbrand.reveal(".brand-title", { origin: "top", delay: 1600, duration: 2900 });
    srbrand.reveal(".brand-group", { origin: "top", delay: 1900, duration: 2900 });

}, []);

    return (
      <SliderWrapper>
        <Title className='brand-title'>Inside the best brands</Title> {/* Añade el título aquí */}
        <SliderContainer className='brand-group'>
          <a href="https://www.logitech.com/" target="_blank" rel="noopener noreferrer">
            <BrandLogo src={logo1} alt="Logitech" />
          </a>
          <a href="https://www.razer.com/" target="_blank" rel="noopener noreferrer">
            <BrandLogo src={logo2} alt="Razer" />
          </a>
          <a href="https://rog.asus.com/" target="_blank" rel="noopener noreferrer">
            <BrandLogo src={logo3} alt="Republic of Gamers" />
          </a>
          <a href="https://www.corsair.com/" target="_blank" rel="noopener noreferrer">
            <BrandLogo src={logo4} alt="Corsair" />
          </a>
          <a href="https://www.amd.com/" target="_blank" rel="noopener noreferrer">
            <BrandLogo src={logo5} alt="AMD" />
          </a>
          <a href="https://www.msi.com/" target="_blank" rel="noopener noreferrer">
            <BrandLogo src={logo6} alt="MSI" />
          </a>
        </SliderContainer>
      </SliderWrapper>
    );
};

export default BrandSlider;