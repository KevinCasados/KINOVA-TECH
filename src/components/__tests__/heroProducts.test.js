import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import HeroProducts from '../HeroProducts/heroProducts';
import ScrollReveal from 'scrollreveal';

jest.mock('scrollreveal', () => ({
  __esModule: true,
  default: jest.fn(() => ({
    reveal: jest.fn(),
  })),
}));

describe('HeroProducts Component', () => {
  const title = 'Discover Our Products';
  const subtitle = 'Check out the latest tech gear!';
  const backgroundImage = '/path/to/image.jpg';

  it('renders the hero title, subtitle, and applies background image', () => {
    render(<HeroProducts title={title} subtitle={subtitle} backgroundImage={backgroundImage} />);
    
    // Verifica que el título se renderiza correctamente
    const heroTitle = screen.getByText(title);
    expect(heroTitle).toBeInTheDocument();

    // Verifica que el subtítulo se renderiza correctamente
    const heroSubtitle = screen.getByText(subtitle);
    expect(heroSubtitle).toBeInTheDocument();

    // Verifica que el componente HeroContainer recibe la imagen de fondo
    const heroContainer = screen.getByTestId('hero-container');
    expect(heroContainer).toHaveStyle(`background-image: url(${backgroundImage})`);
  });

  it('calls ScrollReveal with the correct configuration', () => {
    render(<HeroProducts title={title} subtitle={subtitle} backgroundImage={backgroundImage} />);

    // Verifica que ScrollReveal ha sido llamado con las opciones correctas
    expect(ScrollReveal).toHaveBeenCalledWith({
      distance: '50px',
      duration: 1500,
      delay: 200,
      reset: false,
    });

    // Verifica que los elementos con las clases ".hero-products-title", ".hero-products-hr" y ".hero-products-subtitle"
    // usan ScrollReveal correctamente
    const revealMock = ScrollReveal().reveal;
    expect(revealMock).toHaveBeenCalledWith('.hero-products-title', { origin: 'Top', delay: 200, duration: 1800 });
    expect(revealMock).toHaveBeenCalledWith('.hero-products-hr', { origin: 'Top', delay: 300, duration: 1800 });
    expect(revealMock).toHaveBeenCalledWith('.hero-products-subtitle', { origin: 'Top', delay: 400, duration: 2000 });
  });
});