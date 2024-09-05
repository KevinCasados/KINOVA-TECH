import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal"; // Importa ScrollReveal
import { HeroContainer, HeroImage, HeroImageContainer, HeroTextContainer, HeroTitle } from "./style";
import HeroImageHeadPhones from "../../assets/hero-headphones-v4.png"

const Hero = () => {

    useEffect(() => {
        const srInitial = ScrollReveal({
            distance: "50px",  // Distancia que recorre el elemento
            duration: 1500,    // Duración del efecto en milisegundos
            delay: 200,        // Retardo antes de que comience el efecto
            reset: false,       // El efecto se reinicia cada vez que el elemento entra en la vista
        });
        
        // Revelación inicial desde arriba hacia abajo
        srInitial.reveal(".hero-title", { origin: "top", delay: 1100 });  
        srInitial.reveal(".hero-image", { origin: "top", delay: 1900 });

      
    }, []);

    return(
        <HeroContainer>
            <HeroTextContainer>
                <HeroTitle className="hero-title">INOVATION <br/> IN EVERY PRODUCT</HeroTitle>
            </HeroTextContainer>
            <HeroImageContainer>
                <HeroImage src={HeroImageHeadPhones} className="hero-image" />
            </HeroImageContainer>
        </HeroContainer>
    );
};

export default Hero;