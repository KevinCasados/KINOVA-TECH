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
    <FooterWrapper>
      <FooterContainer>
        <FooterLeft>
          <SubscribeSection>
            <h3>KINOVA</h3>
            <p>Receive exclusive offers and product updates directly in your inbox.</p>
            <div>
              <input type="email" placeholder="Email Address" />
              <button>SIGN UP</button>
            </div>
            <SocialIcons>
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaYoutube /></a>
              <a href="https://github.com/KevinCasados" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
              <a href="#"><FaTwitch /></a>
            </SocialIcons>
          </SubscribeSection>
        </FooterLeft>

        <FooterRight>
          <FooterColumn>
            <FooterTitle>Store</FooterTitle>
            <FooterLink href="#">New Products</FooterLink>
            <FooterLink href="#">Where to Buy</FooterLink>
            <FooterLink href="#">Certified Refurbished</FooterLink>
          </FooterColumn>

          <FooterColumn>
            <FooterTitle>Explore</FooterTitle>
            <FooterLink href="#">PC Builder</FooterLink>
            <FooterLink href="#">KINOVA Innovation</FooterLink>
            <FooterLink href="#">Design Your Circuit</FooterLink>
            <FooterLink href="#">Ambassadors</FooterLink>
          </FooterColumn>

          <FooterColumn>
            <FooterTitle>KINOVA</FooterTitle>
            <FooterLink href="#">About Us</FooterLink>
            <FooterLink href="#">Investor Relations</FooterLink>
            <FooterLink href="#">Career Opportunities</FooterLink>
            <FooterLink href="#">Contact</FooterLink>
          </FooterColumn>

          <FooterColumn>
            <FooterTitle>Support</FooterTitle>
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