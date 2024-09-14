import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import SavedProductsContent from '../SavedProductsContent/SavedProductsContent';
import { addToCart, removeFromSavedProducts } from '../../state/products.slice';

jest.mock('../../state/products.slice');

const mockStore = configureStore([thunk]);

describe('SavedProductsContent Component', () => {
  let store;
  const savedProducts = [
    {
      id: 1,
      name: 'Test Product 1',
      price: 499.99,
      image: '/test-product1.jpg',
    },
    {
      id: 2,
      name: 'Test Product 2',
      price: 999.99,
      image: '/test-product2.jpg',
    }
  ];

  beforeEach(() => {
    store = mockStore({
      products: {
        savedProducts,
      },
    });

    addToCart.mockReturnValue({ type: 'products/addToCart' });
    removeFromSavedProducts.mockReturnValue({ type: 'products/removeFromSavedProducts' });
  });

  it('renders saved products correctly', () => {
    render(
      <Provider store={store}>
        <Router>
          <SavedProductsContent />
        </Router>
      </Provider>
    );

    // Verifica que los productos guardados se rendericen correctamente
    expect(screen.getByText('Test Product 1')).toBeInTheDocument();
    expect(screen.getByText('Test Product 2')).toBeInTheDocument();
  });

  it('renders empty state when there are no saved products', () => {
    store = mockStore({
      products: {
        savedProducts: [],
      },
    });

    render(
      <Provider store={store}>
        <Router>
          <SavedProductsContent />
        </Router>
      </Provider>
    );

    expect(screen.getByText('Your Saved Products list is currently empty!')).toBeInTheDocument();
    expect(screen.getByText('Return to Shop')).toBeInTheDocument();
  });

  it('removes a product from saved products when heart icon is clicked', () => {
    render(
      <Provider store={store}>
        <Router>
          <SavedProductsContent />
        </Router>
      </Provider>
    );

    const removeIcon = screen.getAllByRole('button')[0];
    fireEvent.click(removeIcon);

    expect(removeFromSavedProducts).toHaveBeenCalledWith(savedProducts[0].id);
  });

  it('adds a product to the cart when "ADD TO CART" button is clicked', () => {
    render(
      <Provider store={store}>
        <Router>
          <SavedProductsContent />
        </Router>
      </Provider>
    );

    const addToCartButton = screen.getAllByText('ADD TO CART')[0];
    fireEvent.click(addToCartButton);

    expect(addToCart).toHaveBeenCalledWith(savedProducts[0]);
  });

  it('formats product prices correctly', () => {
    render(
      <Provider store={store}>
        <Router>
          <SavedProductsContent />
        </Router>
      </Provider>
    );

    expect(screen.getByText('$ 499.99')).toBeInTheDocument();
    expect(screen.getByText('$ 999.99')).toBeInTheDocument();
  });
});