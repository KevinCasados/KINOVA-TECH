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
  BackgroundImageContainer
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

        srWhyBetter.reveal(".section-title-text", { origin: "top", delay: 1100 });
        srWhyBetter.reveal(".background-image", { origin: "top", delay: 1100, duration: 1900 });
        srWhyBetter.reveal(".text-group", { origin: "top", delay: 1100, duration: 1900 });

    }, []);

  return (
    <>
      <SectionTitle role="heading" aria-level="2">
         <SectionTitleText className="section-title-text">Technology in every click</SectionTitleText>
      </SectionTitle>
      <WhyBetterContainer aria-label="Why choose our technology" role="region">
        <BackgroundImageContainer className="background-image" aria-hidden="true" />
        <TextGroupContainer>
          <TextGroup className="text-group" role="group" aria-label="High Responsiveness feature">
            <Icon data-testid="icon-bolt" aria-hidden="true"><FaBolt /></Icon>
            <FeatureTitle>High Responsiveness</FeatureTitle>
            <FeatureDescription>
              Mechanical switches offer superior response times and performance, making them ideal for gaming and typing.
            </FeatureDescription>
          </TextGroup>
          <TextGroup className="text-group" role="group" aria-label="Durability feature">
            <Icon data-testid="icon-cogs" aria-hidden="true"><FaCogs /></Icon>
            <FeatureTitle>Durability</FeatureTitle>
            <FeatureDescription>
              Mechanical switches are built to last, often outliving other keyboard components with a lifespan of up to 50 million keystrokes.
            </FeatureDescription>
          </TextGroup>
        </TextGroupContainer>
        
        <TextGroupContainer>
          <TextGroup className="text-group" role="group" aria-label="Tactile Feedback feature">
            <Icon data-testid="icon-hands-helping" aria-hidden="true"><FaHandsHelping /></Icon>
            <FeatureTitle>Tactile Feedback</FeatureTitle>
            <FeatureDescription>
              Each press of a mechanical switch provides a satisfying tactile and auditory feedback that enhances the typing experience.
            </FeatureDescription>
          </TextGroup>
          <TextGroup className="text-group" role="group" aria-label="Customizability feature">
            <Icon data-testid="icon-sliders-h" aria-hidden="true"><FaSlidersH /></Icon>
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