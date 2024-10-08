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
        
        srHeroProducts.reveal(".hero-products-title", { origin: "top", delay: 200, duration: 1800 });
        srHeroProducts.reveal(".hero-products-hr", { origin: "top", delay: 300, duration: 1800 });
        srHeroProducts.reveal(".hero-products-subtitle", { origin: "top", delay: 400, duration: 2000 });

    }, []);

    return (
        <HeroContainer backgroundImage={backgroundImage} overlayColor={overlayColor} role="banner" aria-label="Hero section for products">
            <HeroContent>
                <HeroTitle className="hero-products-title" role="heading" aria-level="1">{title}</HeroTitle>
                <HeroLine className="hero-products-hr" aria-hidden="true" />
                {subtitle && <HeroSubtitle className="hero-products-subtitle">{subtitle}</HeroSubtitle>}
            </HeroContent>
        </HeroContainer>
    );
};

export default HeroProducts;