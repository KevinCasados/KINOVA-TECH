import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import ProductDetailComponent from '../ProductDetail/ProductDetail';
import { fetchProducts, addToCart } from '../../state/products.slice';

jest.mock('../../state/products.slice');

const mockStore = configureStore([thunk]);

describe('ProductDetailComponent', () => {
  let store;
  let product = {
    id: 1,
    name: 'Test Product',
    description: 'This is a test product description',
    price: 499.99,
    image: '/test-product.jpg',
    features: { series: 'X1' },
    details: 'Product details here'
  };

  beforeEach(() => {
    store = mockStore({
      products: {
        products: [product],
        status: 'idle'
      }
    });

    fetchProducts.mockReturnValue({ type: 'products/fetchProducts' });
    addToCart.mockReturnValue({ type: 'products/addToCart' });
  });

  it('renders the product details correctly', () => {
    render(
      <Provider store={store}>
        <Router>
          <ProductDetailComponent />
        </Router>
      </Provider>
    );

    expect(screen.getByText(`Serie ${product.features.series}`)).toBeInTheDocument();
    expect(screen.getByText(product.name)).toBeInTheDocument();
    expect(screen.getByText(product.description)).toBeInTheDocument();
    expect(screen.getByText('MX$ 499.99')).toBeInTheDocument();
    expect(screen.getByText('Product details here')).toBeInTheDocument();
  });

  it('adds product to the cart when "ADD TO CART" button is clicked', () => {
    render(
      <Provider store={store}>
        <Router>
          <ProductDetailComponent />
        </Router>
      </Provider>
    );

    const addButton = screen.getByText('ADD TO CART');
    fireEvent.click(addButton);

    expect(addToCart).toHaveBeenCalledWith(product);
  });

  it('toggles zoom on image click and adjusts image position on mouse move', () => {
    render(
      <Provider store={store}>
        <Router>
          <ProductDetailComponent />
        </Router>
      </Provider>
    );

    const productImage = screen.getByAltText(product.name);

    // Simula el clic en la imagen para activar el zoom
    fireEvent.click(productImage);
    expect(productImage).toHaveStyle('transform: scale(2)');

    // Simula el movimiento del ratón sobre la imagen
    fireEvent.mouseMove(productImage, { clientX: 100, clientY: 100 });
    expect(productImage).toHaveStyle('object-position: 50% 50%');
  });

  it('displays "Cargando producto..." when product is loading', () => {
    store = mockStore({
      products: {
        products: [],
        status: 'loading'
      }
    });

    render(
      <Provider store={store}>
        <Router>
          <ProductDetailComponent />
        </Router>
      </Provider>
    );

    expect(screen.getByText('Cargando producto...')).toBeInTheDocument();
  });

  it('displays "Producto no encontrado!" when product is not found', () => {
    store = mockStore({
      products: {
        products: [],
        status: 'idle'
      }
    });

    render(
      <Provider store={store}>
        <Router>
          <ProductDetailComponent />
        </Router>
      </Provider>
    );

    expect(screen.getByText('Producto no encontrado!')).toBeInTheDocument();
  });
});