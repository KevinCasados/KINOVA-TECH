import React, { useEffect } from "react";
import { HeroContainer, HeroContent, HeroTitle, HeroLine, HeroSubtitle } from "./styles";
import ScrollReveal from "scrollreveal";

const HeroProducts = ({ title, subtitle, backgroundImage, overlayColor = 'rgba(0, 0, 0, 0.5)' }) => {

    useEffect(() => {
        const srHeroProducts = ScrollReveal({
            distance: "50px",  
            duration: 1500,    
            delay: 200,        
            reset: false,       
        });
        
        srHeroProducts.reveal(".hero-products-title", { origin: "Top", delay: 200, duration: 1800 });  
        srHeroProducts.reveal(".hero-products-hr", { origin: "Top", delay: 300, duration: 1800 });
        srHeroProducts.reveal(".hero-products-subtitle", { origin: "Top", delay: 400, duration: 2000 });

    }, []);

    return (
        <HeroContainer backgroundImage={backgroundImage} overlayColor={overlayColor}>
            <HeroContent>
                <HeroTitle className="hero-products-title">{title}</HeroTitle>
                <HeroLine className="hero-products-hr" />
                <HeroSubtitle className="hero-products-subtitle">{subtitle}</HeroSubtitle>
            </HeroContent>
        </HeroContainer>
    );
};

export default HeroProducts;