import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Footer from '../Footer/footer';
import '@testing-library/jest-dom/extend-expect';

describe('Footer Component', () => {
  beforeEach(() => {
    render(<Footer />);
  });

  it('renders the footer with correct sections and links', () => {
    // Verifica que las secciones de título se muestran correctamente
    expect(screen.getByText('KINOVA')).toBeInTheDocument();
    expect(screen.getByText('Store')).toBeInTheDocument();
    expect(screen.getByText('Explore')).toBeInTheDocument();
    expect(screen.getByText('Support')).toBeInTheDocument();

    // Verifica que los enlaces están presentes en cada sección
    expect(screen.getByText('New Products')).toBeInTheDocument();
    expect(screen.getByText('PC Builder')).toBeInTheDocument();
    expect(screen.getByText('Downloads')).toBeInTheDocument();
    expect(screen.getByText('Career Opportunities')).toBeInTheDocument();
  });

  it('renders social media icons with correct links', () => {
    // Verifica que los íconos de redes sociales están presentes
    const facebookIcon = screen.getByRole('link', { name: /facebook/i });
    const instagramIcon = screen.getByRole('link', { name: /instagram/i });
    const youtubeIcon = screen.getByRole('link', { name: /youtube/i });
    const githubIcon = screen.getByRole('link', { name: /github/i });

    // Verifica que los íconos tienen los enlaces correctos
    expect(facebookIcon).toBeInTheDocument();
    expect(instagramIcon).toBeInTheDocument();
    expect(youtubeIcon).toBeInTheDocument();
    expect(githubIcon).toHaveAttribute('href', 'https://github.com/KevinCasados');
  });

  it('renders the email subscription form', () => {
    // Verifica que el campo de entrada de correo electrónico está presente
    const emailInput = screen.getByPlaceholderText('Email Address');
    expect(emailInput).toBeInTheDocument();

    // Verifica que el botón de registro está presente
    const signUpButton = screen.getByText('SIGN UP');
    expect(signUpButton).toBeInTheDocument();
  });

  it('shows correct copyright information', () => {
    // Verifica que el texto de derechos de autor está presente
    expect(screen.getByText(/Copyright © 2024 - 2024 KINOVA. All rights reserved./i)).toBeInTheDocument();
  });

  it('allows user to enter email in the subscription form', () => {
    // Simula la interacción del usuario con el campo de entrada
    const emailInput = screen.getByPlaceholderText('Email Address');
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });

    // Verifica que el valor ingresado se actualiza correctamente
    expect(emailInput.value).toBe('test@example.com');
  });
});