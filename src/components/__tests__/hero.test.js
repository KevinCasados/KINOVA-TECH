import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Hero from '../Hero/hero';
import ScrollReveal from 'scrollreveal';

jest.mock('scrollreveal', () => ({
  __esModule: true,
  default: jest.fn(() => ({
    reveal: jest.fn(),
  })),
}));

describe('Hero Component', () => {
  it('renders the hero title and image', () => {
    render(<Hero />);
    
    // Verifica que el título del Hero se renderiza correctamente
    const heroTitle = screen.getByText(/INOVATION IN EVERY PRODUCT/i);
    expect(heroTitle).toBeInTheDocument();

    // Verifica que la imagen del Hero se renderiza correctamente
    const heroImage = screen.getByAltText(/hero-image/i);
    expect(heroImage).toBeInTheDocument();
  });

  it('calls ScrollReveal with the correct configuration', () => {
    render(<Hero />);

    // Verifica que ScrollReveal ha sido llamado con las opciones correctas
    expect(ScrollReveal).toHaveBeenCalledWith({
      distance: "50px",
      duration: 1500,
      delay: 200,
      reset: false,
    });

    // Verifica que los elementos con las clases ".hero-title" y ".hero-image" usan ScrollReveal correctamente
    const revealMock = ScrollReveal().reveal;
    expect(revealMock).toHaveBeenCalledWith(".hero-title", { origin: "top", delay: 1100 });
    expect(revealMock).toHaveBeenCalledWith(".hero-image", { origin: "top", delay: 1900 });
  });
});