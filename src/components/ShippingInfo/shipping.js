import React, { useEffect } from 'react';
import { ShippingContainer, InfoBox, Title, Description, Icon } from './styles';
import { FaTruck, FaCheckCircle, FaShieldAlt } from 'react-icons/fa';
import ScrollReveal from 'scrollreveal';

const ShippingInfo = () => {

  useEffect(() => {
    const srShipping = ScrollReveal({
        distance: "50px",
        duration: 1500,
        delay: 200,
        reset: false,
    });
    
    srShipping.reveal(".Shipping-center", { origin: "bottom", delay: 300, duration: 1900 });
    srShipping.reveal(".Shipping-sides", { origin: "bottom", delay: 900, duration: 1900 });

  }, []);

  return (
    <ShippingContainer role="region" aria-label="Shipping Information">
      <InfoBox className='Shipping-sides' role="group" aria-label="Fast Shipping information">
        <Icon aria-hidden="true"><FaTruck /></Icon>
        <Title>Fast Shipping</Title>
        <Description>Get your products delivered within 24-48 hours, guaranteed!</Description>
      </InfoBox>
      <InfoBox className='Shipping-center' role="group" aria-label="Quality Assurance information">
        <Icon aria-hidden="true"><FaCheckCircle /></Icon>
        <Title>Quality Assurance</Title>
        <Description>All products are checked for quality before dispatch to ensure you get the best.</Description>
      </InfoBox>
      <InfoBox className='Shipping-sides' role="group" aria-label="1-Year Warranty information">
        <Icon aria-hidden="true"><FaShieldAlt /></Icon>
        <Title>1-Year Warranty</Title>
        <Description>Enjoy peace of mind with our 1-year warranty on all products.</Description>
      </InfoBox>
    </ShippingContainer>
  );
};

export default ShippingInfo;