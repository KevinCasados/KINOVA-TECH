import React from 'react';
import { render, screen } from '@testing-library/react';
import BrandSlider from '../BrandSlider/brandSlider';
import '@testing-library/jest-dom/extend-expect';
import ScrollReveal from 'scrollreveal';


jest.mock('scrollreveal', () => ({
  reveal: jest.fn(),
}));

describe('BrandSlider Component', () => {
  beforeEach(() => {
    render(<BrandSlider />);
  });

  it('should render the title', () => {
    const titleElement = screen.getByText(/inside the best brands/i);
    expect(titleElement).toBeInTheDocument();
  });

  it('should render all brand logos', () => {
    const logos = [
      'Logitech',
      'Razer',
      'Republic of Gamers',
      'Corsair',
      'AMD',
      'MSI',
    ];

    logos.forEach((altText) => {
      const logoElement = screen.getByAltText(altText);
      expect(logoElement).toBeInTheDocument();
    });
  });

  it('should have the correct links for each brand', () => {
    const links = [
      { href: 'https://www.logitech.com/', alt: 'Logitech' },
      { href: 'https://www.razer.com/', alt: 'Razer' },
      { href: 'https://rog.asus.com/', alt: 'Republic of Gamers' },
      { href: 'https://www.corsair.com/', alt: 'Corsair' },
      { href: 'https://www.amd.com/', alt: 'AMD' },
      { href: 'https://www.msi.com/', alt: 'MSI' },
    ];

    links.forEach(({ href, alt }) => {
      const linkElement = screen.getByAltText(alt).closest('a');
      expect(linkElement).toHaveAttribute('href', href);
    });
  });

  it('should call ScrollReveal on component mount', () => {
    expect(ScrollReveal().reveal).toHaveBeenCalledTimes(2); 
    expect(ScrollReveal().reveal).toHaveBeenCalledWith('.brand-title', {
      origin: 'top',
      delay: 1600,
      duration: 2900,
    });
    expect(ScrollReveal().reveal).toHaveBeenCalledWith('.brand-group', {
      origin: 'top',
      delay: 1900,
      duration: 2900,
    });
  });
});