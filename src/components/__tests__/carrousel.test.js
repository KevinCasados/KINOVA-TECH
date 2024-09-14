import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Carousel from '../Corrousel/carrousel';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';

describe('Carousel Component', () => {
  beforeEach(() => {
    render(
      <Router>
        <Carousel />
      </Router>
    );
  });

  it('should render the first slide by default', () => {
    const firstSlideTitle = screen.getByText(/ANOTHER LEVEL/i);
    expect(firstSlideTitle).toBeInTheDocument();

    const firstSlideSubtitle = screen.getByText(/Explore new dimensions of gaming/i);
    expect(firstSlideSubtitle).toBeInTheDocument();

    const firstSlideButton = screen.getByText(/SHOP NOW/i);
    expect(firstSlideButton).toBeInTheDocument();
  });

  it('should switch to the next slide when the "next" button is clicked', () => {
    const nextButton = screen.getByText('>');
    fireEvent.click(nextButton);

    const secondSlideTitle = screen.getByText(/THERE'S LEVELS TO PLAY/i);
    expect(secondSlideTitle).toBeInTheDocument();
  });

  it('should switch to the previous slide when the "previous" button is clicked', () => {
    // Primero cambiamos a la segunda diapositiva
    const nextButton = screen.getByText('>');
    fireEvent.click(nextButton);

    // Luego verificamos que se pueda regresar a la primera diapositiva
    const prevButton = screen.getByText('<');
    fireEvent.click(prevButton);

    const firstSlideTitle = screen.getByText(/ANOTHER LEVEL/i);
    expect(firstSlideTitle).toBeInTheDocument();
  });

  it('should switch slides automatically after a set interval', () => {
    jest.useFakeTimers(); // Utilizamos timers falsos para simular el intervalo

    const firstSlideTitle = screen.getByText(/ANOTHER LEVEL/i);
    expect(firstSlideTitle).toBeInTheDocument();

    // Avanzamos el timer para simular el intervalo de 8 segundos
    jest.advanceTimersByTime(8000);

    const secondSlideTitle = screen.getByText(/THERE'S LEVELS TO PLAY/i);
    expect(secondSlideTitle).toBeInTheDocument();

    jest.useRealTimers(); // Restauramos los timers reales
  });

  it('should change slide when an indicator is clicked', () => {
    const indicators = screen.getAllByRole('button');
    
    // Verificamos que los indicadores existan y hacemos click en el segundo
    fireEvent.click(indicators[1]);

    const secondSlideTitle = screen.getByText(/THERE'S LEVELS TO PLAY/i);
    expect(secondSlideTitle).toBeInTheDocument();
  });

  it('should render navigation buttons', () => {
    const prevButton = screen.getByText('<');
    const nextButton = screen.getByText('>');

    expect(prevButton).toBeInTheDocument();
    expect(nextButton).toBeInTheDocument();
  });

  it('should render the correct number of indicators', () => {
    const indicators = screen.getAllByRole('button');
    expect(indicators.length).toBe(2); // Debe haber 2 indicadores, uno por cada slide
  });
});