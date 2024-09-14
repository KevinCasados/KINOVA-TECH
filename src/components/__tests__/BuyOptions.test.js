import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import BuyOptions from '../BuyOptions/BuyOptions';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';

// Simulamos el store de Redux para las pruebas
const mockStore = createStore(() => ({
  products: {
    products: [
      { id: 1, name: 'Product 1', price: 1000, image: '/images/product1.png' },
      { id: 2, name: 'Product 2', price: 2000, image: '/images/product2.png' },
      { id: 3, name: 'Product 3', price: 3000, image: '/images/product3.png' },
      { id: 4, name: 'Product 4', price: 4000, image: '/images/product4.png' },
      { id: 5, name: 'Product 5', price: 5000, image: '/images/product5.png' },
      { id: 6, name: 'Product 6', price: 6000, image: '/images/product6.png' },
    ],
  },
}));

describe('BuyOptions Component', () => {
  beforeEach(() => {
    render(
      <Provider store={mockStore}>
        <Router>
          <BuyOptions />
        </Router>
      </Provider>
    );
  });

  it('should render the title', () => {
    const titleElement = screen.getByText(/You May Also Like/i);
    expect(titleElement).toBeInTheDocument();
  });

  it('should render the correct number of products per page', () => {
    const productImages = screen.getAllByRole('img');
    expect(productImages.length).toBe(3); // Solo debe mostrar 3 productos por página
  });

  it('should navigate to the next page when clicking the next arrow', () => {
    const nextArrow = screen.getByText('>');
    fireEvent.click(nextArrow);

    const firstProduct = screen.getByAltText('Product 4');
    expect(firstProduct).toBeInTheDocument(); // Verificamos que el primer producto de la segunda página se muestre
  });

  it('should navigate to the previous page when clicking the previous arrow', () => {
    const nextArrow = screen.getByText('>');
    fireEvent.click(nextArrow); // Cambiamos a la segunda página

    const previousArrow = screen.getByText('<');
    fireEvent.click(previousArrow); // Regresamos a la primera página

    const firstProduct = screen.getByAltText('Product 1');
    expect(firstProduct).toBeInTheDocument(); // Verificamos que el primer producto de la primera página se muestre
  });

  it('should show the correct number of dots based on the total pages', () => {
    const dots = screen.getAllByRole('button'); // Los dots son botones
    expect(dots.length).toBe(2); // Solo debe haber 2 páginas, por lo tanto, 2 dots
  });

  it('should allow navigation by clicking on the dots', () => {
    const dots = screen.getAllByRole('button');
    fireEvent.click(dots[1]); // Hacemos clic en el segundo dot

    const firstProductOnSecondPage = screen.getByAltText('Product 4');
    expect(firstProductOnSecondPage).toBeInTheDocument();
  });
});