import React from 'react';
import {
  FooterWrapper,
  FooterContainer,
  FooterLeft,
  FooterRight,
  FooterColumn,
  FooterTitle,
  FooterLink,
  SocialIcons,
  SubscribeSection,
  FooterBottom,
} from './styles';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaTwitch, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <FooterWrapper role="contentinfo" aria-label="Footer with links to store, support, and social media">
      <FooterContainer>
        <FooterLeft>
          <SubscribeSection role="region" aria-labelledby="subscribe-section-title">
            <h3 id="subscribe-section-title">KINOVA</h3>
            <p>Receive exclusive offers and product updates directly in your inbox.</p>
            <div>
              <input type="email" placeholder="Email Address" aria-label="Email Address for newsletter subscription" />
              <button aria-label="Sign up for newsletter">SIGN UP</button>
            </div>
            <SocialIcons>
              <a href="#" aria-label="Visit our Facebook page"><FaFacebookF /></a>
              <a href="#" aria-label="Visit our Instagram page"><FaInstagram /></a>
              <a href="#" aria-label="Visit our YouTube channel"><FaYoutube /></a>
              <a href="https://github.com/KevinCasados" target="_blank" rel="noopener noreferrer" aria-label="Visit our GitHub page"><FaGithub /></a>
              <a href="#" aria-label="Visit our Twitch page"><FaTwitch /></a>
            </SocialIcons>
          </SubscribeSection>
        </FooterLeft>

        <FooterRight role="navigation" aria-label="Footer navigation links">
          <FooterColumn role="region" aria-labelledby="store-links">
            <FooterTitle id="store-links">Store</FooterTitle>
            <FooterLink href="#">New Products</FooterLink>
            <FooterLink href="#">Where to Buy</FooterLink>
            <FooterLink href="#">Certified Refurbished</FooterLink>
          </FooterColumn>

          <FooterColumn role="region" aria-labelledby="explore-links">
            <FooterTitle id="explore-links">Explore</FooterTitle>
            <FooterLink href="#">PC Builder</FooterLink>
            <FooterLink href="#">KINOVA Innovation</FooterLink>
            <FooterLink href="#">Design Your Circuit</FooterLink>
            <FooterLink href="#">Ambassadors</FooterLink>
          </FooterColumn>

          <FooterColumn role="region" aria-labelledby="kinova-links">
            <FooterTitle id="kinova-links">KINOVA</FooterTitle>
            <FooterLink href="#">About Us</FooterLink>
            <FooterLink href="#">Investor Relations</FooterLink>
            <FooterLink href="#">Career Opportunities</FooterLink>
            <FooterLink href="#">Contact</FooterLink>
          </FooterColumn>

          <FooterColumn role="region" aria-labelledby="support-links">
            <FooterTitle id="support-links">Support</FooterTitle>
            <FooterLink href="#">Downloads</FooterLink>
            <FooterLink href="#">Customer Support</FooterLink>
            <FooterLink href="#">Warranty</FooterLink>
            <FooterLink href="#">Shipping/RMA/Returns</FooterLink>
          </FooterColumn>
        </FooterRight>
      </FooterContainer>

      <FooterBottom>
        Copyright © 2024 - 2024 KINOVA. All rights reserved.
      </FooterBottom>
    </FooterWrapper>
  );
};

export default Footer;