import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import ProductsList from '../ProductsList/productsList';
import { fetchProducts, addToCart, addToSavedProducts, removeFromSavedProducts } from '../../state/products.slice';

jest.mock('../../state/products.slice');

const mockStore = configureStore([thunk]);

describe('ProductsList Component', () => {
  let store;
  let products = [
    {
      id: 1,
      name: 'Test Product 1',
      description: 'This is a test product 1',
      price: 499.99,
      image: '/test-product1.jpg',
      category: 'Mice',
      features: {
        lighting: ['LIGHTSYNC RGB'],
        connectivity: ['Bluetooth'],
        series: ['Pro'],
        platform: ['PC']
      }
    },
    {
      id: 2,
      name: 'Test Product 2',
      description: 'This is a test product 2',
      price: 999.99,
      image: '/test-product2.jpg',
      category: 'Keyboards',
      features: {
        lighting: ['Backlighting'],
        connectivity: ['With cable'],
        series: ['G'],
        platform: ['PC']
      }
    }
  ];

  beforeEach(() => {
    store = mockStore({
      products: {
        products,
        status: 'idle',
        savedProducts: []
      }
    });

    fetchProducts.mockReturnValue({ type: 'products/fetchProducts' });
    addToCart.mockReturnValue({ type: 'products/addToCart' });
    addToSavedProducts.mockReturnValue({ type: 'products/addToSavedProducts' });
    removeFromSavedProducts.mockReturnValue({ type: 'products/removeFromSavedProducts' });
  });

  it('renders products and filters correctly', () => {
    render(
      <Provider store={store}>
        <Router>
          <ProductsList categoryFilter="All" availableFilters={['lighting', 'connectivity', 'series', 'platform']} availableFeatureValues={{
            lighting: ['LIGHTSYNC RGB', 'Backlighting'],
            connectivity: ['Bluetooth', 'With cable'],
            series: ['Pro', 'G'],
            platform: ['PC', 'Xbox']
          }} />
        </Router>
      </Provider>
    );

    // Verifica que los productos se rendericen correctamente
    expect(screen.getByText('Test Product 1')).toBeInTheDocument();
    expect(screen.getByText('Test Product 2')).toBeInTheDocument();

    // Verifica que los filtros estén presentes
    expect(screen.getByText('Lighting')).toBeInTheDocument();
    expect(screen.getByText('Connectivity')).toBeInTheDocument();
    expect(screen.getByText('Series')).toBeInTheDocument();
    expect(screen.getByText('Platform')).toBeInTheDocument();
  });

  it('adds product to the cart when "ADD TO CART" button is clicked', () => {
    render(
      <Provider store={store}>
        <Router>
          <ProductsList />
        </Router>
      </Provider>
    );

    const addToCartButton = screen.getAllByText('ADD TO CART')[0];
    fireEvent.click(addToCartButton);

    expect(addToCart).toHaveBeenCalledWith(products[0]);
  });

  it('filters products based on selected filters', () => {
    render(
      <Provider store={store}>
        <Router>
          <ProductsList categoryFilter="All" availableFilters={['lighting', 'connectivity', 'series', 'platform']} availableFeatureValues={{
            lighting: ['LIGHTSYNC RGB', 'Backlighting'],
            connectivity: ['Bluetooth', 'With cable'],
            series: ['Pro', 'G'],
            platform: ['PC', 'Xbox']
          }} />
        </Router>
      </Provider>
    );

    // Selecciona un filtro
    const lightingCheckbox = screen.getByLabelText('LIGHTSYNC RGB');
    fireEvent.click(lightingCheckbox);

    // Verifica que solo el producto con el filtro aplicado esté visible
    expect(screen.getByText('Test Product 1')).toBeInTheDocument();
    expect(screen.queryByText('Test Product 2')).toBeNull();
  });

  it('sorts products based on selected sorting option', () => {
    render(
      <Provider store={store}>
        <Router>
          <ProductsList />
        </Router>
      </Provider>
    );

    const sortDropdown = screen.getByLabelText(/SORT BY/i);
    fireEvent.change(sortDropdown, { target: { value: 'price-high-low' } });

    // Verifica que los productos se ordenen correctamente
    const productNames = screen.getAllByRole('heading', { level: 2 });
    expect(productNames[0]).toHaveTextContent('Test Product 2');
    expect(productNames[1]).toHaveTextContent('Test Product 1');
  });

  it('toggles product like (saved to favorites)', () => {
    render(
      <Provider store={store}>
        <Router>
          <ProductsList />
        </Router>
      </Provider>
    );

    const heartIcon = screen.getAllByRole('button')[0];
    fireEvent.click(heartIcon);

    expect(addToSavedProducts).toHaveBeenCalledWith(products[0]);

    fireEvent.click(heartIcon);

    expect(removeFromSavedProducts).toHaveBeenCalledWith(products[0].id);
  });

  it('displays loading message when products are loading', () => {
    store = mockStore({
      products: {
        products: [],
        status: 'loading',
        savedProducts: []
      }
    });

    render(
      <Provider store={store}>
        <Router>
          <ProductsList />
        </Router>
      </Provider>
    );

    expect(screen.getByText('Loading products...')).toBeInTheDocument();
  });

  it('displays error message when product fetching fails', () => {
    store = mockStore({
      products: {
        products: [],
        status: 'failed',
        savedProducts: []
      }
    });

    render(
      <Provider store={store}>
        <Router>
          <ProductsList />
        </Router>
      </Provider>
    );

    expect(screen.getByText('Error loading products')).toBeInTheDocument();
  });
});