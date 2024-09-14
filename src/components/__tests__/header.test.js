import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import Header from '../Header/header'; // Asegúrate de que la ruta sea correcta
import '@testing-library/jest-dom'; // Extensión necesaria para las funciones de expect

// Configura el store mock
const mockStore = configureStore([]);
const store = mockStore({
  cart: { items: [{ id: 1, name: 'Producto 1', quantity: 2 }] }, // Simula el estado del carrito
});

describe('Header Component', () => {
  it('should render the header with logo and cart icon', () => {
    render(
      <Provider store={store}>
        <Router>
          <Header />
        </Router>
      </Provider>
    );

    // Verifica que el logo se renderice correctamente
    const logo = screen.getByAltText(/kinova logo/i);
    expect(logo).toBeInTheDocument();

    // Verifica que el ícono de carrito esté en el documento
    const cartIcon = screen.getByTestId('cart-icon');
    expect(cartIcon).toBeInTheDocument();
  });

  it('should display the correct number of cart items', () => {
    render(
      <Provider store={store}>
        <Router>
          <Header />
        </Router>
      </Provider>
    );

    // Verifica que el contador del carrito muestre el número correcto de productos
    const cartCount = screen.getByText('2');
    expect(cartCount).toBeInTheDocument();
  });

  it('should toggle menu visibility when the menu icon is clicked', () => {
    render(
      <Provider store={store}>
        <Router>
          <Header />
        </Router>
      </Provider>
    );

    // Verifica que el ícono del menú esté presente
    const menuIcon = screen.getByTestId('menu-icon');
    expect(menuIcon).toBeInTheDocument();

    // Simula el clic para abrir el menú
    fireEvent.click(menuIcon);

    // Verifica que el menú se vuelva visible después del clic
    const dropdownMenu = screen.getByTestId('dropdown-menu');
    expect(dropdownMenu).toBeVisible();
  });

  it('should hide the menu when close function is called', () => {
    render(
      <Provider store={store}>
        <Router>
          <Header />
        </Router>
      </Provider>
    );

    // Simula abrir el menú
    const menuIcon = screen.getByTestId('menu-icon');
    fireEvent.click(menuIcon);

    // Verifica que el menú se vuelve visible
    const dropdownMenu = screen.getByTestId('dropdown-menu');
    expect(dropdownMenu).toBeVisible();

    // Simula el cierre del menú (puedes agregar un botón de cerrar en tu componente Header)
    const closeButton = screen.getByTestId('close-menu');
    fireEvent.click(closeButton);

    // Verifica que el menú se ocultó
    expect(dropdownMenu).not.toBeVisible();
  });
});