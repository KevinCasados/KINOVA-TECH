import { render, screen } from '@testing-library/react';
import ShippingInfo from '../ShippingInfo/shipping';
import ScrollReveal from 'scrollreveal';
import { FaTruck, FaCheckCircle, FaShieldAlt } from 'react-icons/fa';

jest.mock('scrollreveal', () => ({
  reveal: jest.fn(),
}));

describe('ShippingInfo Component', () => {
  it('should render the shipping information correctly', () => {
    render(<ShippingInfo />);

    // Verificar que los títulos de cada sección están presentes
    expect(screen.getByText('Fast Shipping')).toBeInTheDocument();
    expect(screen.getByText('Quality Assurance')).toBeInTheDocument();
    expect(screen.getByText('1-Year Warranty')).toBeInTheDocument();

    // Verificar que las descripciones de cada sección están presentes
    expect(screen.getByText(/Get your products delivered/i)).toBeInTheDocument();
    expect(screen.getByText(/All products are checked/i)).toBeInTheDocument();
    expect(screen.getByText(/Enjoy peace of mind/i)).toBeInTheDocument();
  });

  it('should render the correct icons', () => {
    render(<ShippingInfo />);

    // Verificar que los íconos están presentes
    expect(screen.getByTestId('shipping-icon-truck')).toBeInTheDocument();
    expect(screen.getByTestId('shipping-icon-checkcircle')).toBeInTheDocument();
    expect(screen.getByTestId('shipping-icon-shield')).toBeInTheDocument();
  });

  it('should call ScrollReveal when the component is rendered', () => {
    render(<ShippingInfo />);

    // Verificar que ScrollReveal se haya llamado con los elementos correctos
    expect(ScrollReveal.reveal).toHaveBeenCalledWith('.Shipping-center', {
      origin: 'bottom',
      delay: 300,
      duration: 1900,
    });
    expect(ScrollReveal.reveal).toHaveBeenCalledWith('.Shipping-sides', {
      origin: 'bottom',
      delay: 900,
      duration: 1900,
    });
  });
});