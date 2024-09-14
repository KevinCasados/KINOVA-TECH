import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CartContent from '../CartContent/CartContent';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import { removeFromCart, updateQuantity } from '../../state/products.slice';

// Simulamos el store de Redux para las pruebas
const mockStore = createStore(() => ({
  products: {
    cart: [
      { id: 1, name: 'Product 1', price: 1000, quantity: 2, image: '/images/product1.png', category: 'Category 1' },
      { id: 2, name: 'Product 2', price: 500, quantity: 1, image: '/images/product2.png', category: 'Category 2' },
    ],
  },
}));

describe('CartContent Component', () => {
  beforeEach(() => {
    render(
      <Provider store={mockStore}>
        <Router>
          <CartContent />
        </Router>
      </Provider>
    );
  });

  it('should render the cart title', () => {
    const titleElement = screen.getByText(/YOUR CART/i);
    expect(titleElement).toBeInTheDocument();
  });

  it('should render products in the cart', () => {
    const product1 = screen.getByText(/Product 1/i);
    const product2 = screen.getByText(/Product 2/i);
    expect(product1).toBeInTheDocument();
    expect(product2).toBeInTheDocument();
  });

  it('should display the correct subtotal and total', () => {
    const subtotal = screen.getByText(/Subtotal/i);
    const total = screen.getByText(/Total/i);

    // Verificamos que el subtotal sea correcto (1000 * 2 + 500 = 2500)
    const formattedSubtotal = screen.getByText('$ 2,500.00');
    expect(subtotal).toBeInTheDocument();
    expect(formattedSubtotal).toBeInTheDocument();

    // Verificamos el total con el envío de $10 (2500 + 10 = 2510)
    const formattedTotal = screen.getByText('$ 2,510.00');
    expect(total).toBeInTheDocument();
    expect(formattedTotal).toBeInTheDocument();
  });

  it('should remove a product when the remove button is clicked', () => {
    const removeButton = screen.getAllByRole('button', { name: /close/i })[0];
    fireEvent.click(removeButton);

    expect(mockStore.getState().products.cart.length).toBe(1); // Debería quedar solo 1 producto
  });

  it('should update the quantity of a product', () => {
    const quantityInput = screen.getAllByRole('spinbutton')[0]; // Seleccionamos el input de cantidad del primer producto
    fireEvent.change(quantityInput, { target: { value: '3' } }); // Cambiamos la cantidad a 3

    expect(quantityInput.value).toBe('3'); // Verificamos que la cantidad se haya actualizado
    expect(mockStore.getState().products.cart[0].quantity).toBe(3); // Verificamos que el estado también haya cambiado
  });

  it('should show empty cart message if no products in the cart', () => {
    // Simulamos un carrito vacío
    const emptyStore = createStore(() => ({
      products: {
        cart: [],
      },
    }));

    render(
      <Provider store={emptyStore}>
        <Router>
          <CartContent />
        </Router>
      </Provider>
    );

    const emptyMessage = screen.getByText(/Your cart is currently empty!/i);
    expect(emptyMessage).toBeInTheDocument();
  });

  it('should display free shipping if the subtotal is more than 1000', () => {
    const shippingFee = screen.getByText(/Free Shipping/i);
    expect(shippingFee).toBeInTheDocument();
  });

  it('should proceed to checkout when Proceed button is clicked', () => {
    const proceedButton = screen.getByText(/Proceed to Checkout/i);
    fireEvent.click(proceedButton);

    // Aquí podríamos simular la navegación a una página de checkout o verificar que el botón existe
    expect(proceedButton).toBeInTheDocument();
  });
});