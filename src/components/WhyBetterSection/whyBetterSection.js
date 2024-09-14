import React, { useEffect } from "react";
import {
  WhyBetterContainer,
  TextGroupContainer,
  TextGroup,
  FeatureTitle,
  FeatureDescription,
  Icon,
  SectionTitle,
  SectionTitleText,
  BackgroundImageContainer // Importa el nuevo estilo para el contenedor de la imagen
} from "./styles";
import { FaBolt, FaCogs, FaHandsHelping, FaSlidersH } from "react-icons/fa";
import ScrollReveal from "scrollreveal";

const WhyBetterSection = () => {

    useEffect(() => {
        const srWhyBetter = ScrollReveal({
            distance: "50px",
            duration: 1500,
            delay: 200,
            reset: false,
        });

        // Revelación inicial desde arriba hacia abajo
        srWhyBetter.reveal(".section-title-text", { origin: "top", delay: 1100 });  
        
        // ScrollReveal para la imagen de fondo
        srWhyBetter.reveal(".background-image", { origin: "top", delay: 1100, duration: 1900 });
        srWhyBetter.reveal(".text-group", { origin: "top", delay: 1100, duration: 1900 });

    }, []);

  return (
    <>
      <SectionTitle>
         <SectionTitleText className="section-title-text">Technology in every click</SectionTitleText>
      </SectionTitle>
      <WhyBetterContainer>
        <BackgroundImageContainer className="background-image" /> {/* Contenedor de la imagen */}
        <TextGroupContainer>
          <TextGroup className="text-group">
            <Icon data-testid="icon-bolt"><FaBolt /></Icon>
            <FeatureTitle>High Responsiveness</FeatureTitle>
            <FeatureDescription>
              Mechanical switches offer superior response times and performance, making them ideal for gaming and typing.
            </FeatureDescription>
          </TextGroup>
          <TextGroup className="text-group">
            <Icon data-testid="icon-cogs"><FaCogs /></Icon>
            <FeatureTitle>Durability</FeatureTitle>
            <FeatureDescription>
              Mechanical switches are built to last, often outliving other keyboard components with a lifespan of up to 50 million keystrokes.
            </FeatureDescription>
          </TextGroup>
        </TextGroupContainer>
        
        <TextGroupContainer>
          <TextGroup className="text-group">
            <Icon data-testid="icon-hands-helping"><FaHandsHelping /></Icon> 
            <FeatureTitle>Tactile Feedback</FeatureTitle>
            <FeatureDescription>
              Each press of a mechanical switch provides a satisfying tactile and auditory feedback that enhances the typing experience.
            </FeatureDescription>
          </TextGroup>
          <TextGroup className="text-group">
            <Icon Icon data-testid="icon-sliders-h"><FaSlidersH /></Icon>
            <FeatureTitle>Customizability</FeatureTitle>
            <FeatureDescription>
              Mechanical switches come in various types with different actuation forces and travel distances, allowing for personalized typing experiences.
            </FeatureDescription>
          </TextGroup>
        </TextGroupContainer>
      </WhyBetterContainer>
    </>
  );
};

export default WhyBetterSection;