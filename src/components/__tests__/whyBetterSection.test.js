import { render, screen } from '@testing-library/react';
import WhyBetterSection from '../WhyBetterSection/whyBetterSection';
import ScrollReveal from 'scrollreveal';
import { FaBolt, FaCogs, FaHandsHelping, FaSlidersH } from 'react-icons/fa';

jest.mock('scrollreveal', () => ({
  reveal: jest.fn(),
}));

describe('WhyBetterSection Component', () => {
  it('should render the section title correctly', () => {
    render(<WhyBetterSection />);

    // Verificar que el título de la sección está presente
    expect(screen.getByText('Technology in every click')).toBeInTheDocument();
  });

  it('should render the feature titles and descriptions correctly', () => {
    render(<WhyBetterSection />);

    // Verificar que los títulos de cada característica están presentes
    expect(screen.getByText('High Responsiveness')).toBeInTheDocument();
    expect(screen.getByText('Durability')).toBeInTheDocument();
    expect(screen.getByText('Tactile Feedback')).toBeInTheDocument();
    expect(screen.getByText('Customizability')).toBeInTheDocument();

    // Verificar que las descripciones de cada característica están presentes
    expect(screen.getByText(/Mechanical switches offer superior/i)).toBeInTheDocument();
    expect(screen.getByText(/Mechanical switches are built to last/i)).toBeInTheDocument();
    expect(screen.getByText(/provides a satisfying tactile/i)).toBeInTheDocument();
    expect(screen.getByText(/come in various types with different/i)).toBeInTheDocument();
  });

  it('should render the correct icons for each feature', () => {
    render(<WhyBetterSection />);

    // Verificar que los íconos están presentes
    expect(screen.getByTestId('icon-bolt')).toBeInTheDocument();
    expect(screen.getByTestId('icon-cogs')).toBeInTheDocument();
    expect(screen.getByTestId('icon-hands-helping')).toBeInTheDocument();
    expect(screen.getByTestId('icon-sliders-h')).toBeInTheDocument();
  });

  it('should call ScrollReveal when the component is rendered', () => {
    render(<WhyBetterSection />);

    // Verificar que ScrollReveal se haya llamado con los elementos correctos
    expect(ScrollReveal.reveal).toHaveBeenCalledWith('.section-title-text', { origin: 'top', delay: 1100 });
    expect(ScrollReveal.reveal).toHaveBeenCalledWith('.background-image', { origin: 'top', delay: 1100, duration: 1900 });
    expect(ScrollReveal.reveal).toHaveBeenCalledWith('.text-group', { origin: 'top', delay: 1100, duration: 1900 });
  });
});