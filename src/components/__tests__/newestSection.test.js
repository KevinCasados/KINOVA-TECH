import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router } from 'react-router-dom';
import NewestSection from '../NewestSection/newestSection';

describe('NewestSection Component', () => {
  it('renders the section title and subtitle', () => {
    render(
      <Router>
        <NewestSection />
      </Router>
    );

    // Verifica que el título de la sección esté presente
    const sectionTitle = screen.getByText('Equipment for advanced play');
    expect(sectionTitle).toBeInTheDocument();

    // Verifica que el subtítulo de la sección esté presente
    const sectionSubtitle = screen.getByText('Perform at your best in-game with the best gaming gear from Kinova.');
    expect(sectionSubtitle).toBeInTheDocument();
  });

  it('renders the category cards with correct images and text', () => {
    render(
      <Router>
        <NewestSection />
      </Router>
    );

    // Verifica que la tarjeta de "Gaming Mouse" esté presente
    const gamingMouseText = screen.getByText('Gaming Mouse');
    expect(gamingMouseText).toBeInTheDocument();

    const gamingMouseImage = screen.getByAltText('Gaming Mouse');
    expect(gamingMouseImage).toBeInTheDocument();

    // Verifica que la tarjeta de "Gaming Keyboards" esté presente
    const gamingKeyboardsText = screen.getByText('Gaming Keyboards');
    expect(gamingKeyboardsText).toBeInTheDocument();

    const gamingKeyboardsImage = screen.getByAltText('Gaming Keyboards');
    expect(gamingKeyboardsImage).toBeInTheDocument();

    // Verifica que la tarjeta de "Gaming Headset" esté presente
    const gamingHeadsetText = screen.getByText('Gaming Headset');
    expect(gamingHeadsetText).toBeInTheDocument();

    const gamingHeadsetImage = screen.getByAltText('Headphones');
    expect(gamingHeadsetImage).toBeInTheDocument();
  });

  it('renders links to product categories', () => {
    render(
      <Router>
        <NewestSection />
      </Router>
    );

    // Verifica que el enlace a "Gaming Mouse" funcione
    const mouseLink = screen.getByRole('link', { name: /gaming mouse/i });
    expect(mouseLink).toHaveAttribute('href', '/products/mouses');

    // Verifica que el enlace a "Gaming Keyboards" funcione
    const keyboardLink = screen.getByRole('link', { name: /gaming keyboards/i });
    expect(keyboardLink).toHaveAttribute('href', '/products/keyboards');

    // Verifica que el enlace a "Gaming Headset" funcione
    const headsetLink = screen.getByRole('link', { name: /gaming headset/i });
    expect(headsetLink).toHaveAttribute('href', '/products/headphones');
  });
});