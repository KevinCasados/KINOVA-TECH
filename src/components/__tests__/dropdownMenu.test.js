import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import DropdownMenu from '../DropdownMenu/DropdownMenu';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';

describe('DropdownMenu Component', () => {
  const onCloseMock = jest.fn();

  const renderDropdownMenu = (isVisible = true) => {
    return render(
      <Router>
        <DropdownMenu isVisible={isVisible} onClose={onCloseMock} />
      </Router>
    );
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders the main menu when visible', () => {
    renderDropdownMenu();

    expect(screen.getByText(/my profile/i)).toBeInTheDocument();
    expect(screen.getByText(/cart/i)).toBeInTheDocument();
    expect(screen.getByText(/products/i)).toBeInTheDocument();
    expect(screen.getByText(/saved products/i)).toBeInTheDocument();
    expect(screen.getByText(/support/i)).toBeInTheDocument();
  });

  it('does not render the menu when not visible', () => {
    renderDropdownMenu(false);
    expect(screen.queryByText(/my profile/i)).not.toBeInTheDocument();
  });

  it('navigates to the products submenu when Products is clicked', () => {
    renderDropdownMenu();

    const productsMenuItem = screen.getByText(/products/i);
    fireEvent.click(productsMenuItem);

    expect(screen.getByText(/mouse/i)).toBeInTheDocument();
    expect(screen.getByText(/keyboards/i)).toBeInTheDocument();
    expect(screen.getByText(/headphones/i)).toBeInTheDocument();
  });

  it('navigates to the support submenu when Support is clicked', () => {
    renderDropdownMenu();

    const supportMenuItem = screen.getByText(/support/i);
    fireEvent.click(supportMenuItem);

    expect(screen.getByText(/downloads/i)).toBeInTheDocument();
    expect(screen.getByText(/customer support/i)).toBeInTheDocument();
    expect(screen.getByText(/warranty/i)).toBeInTheDocument();
  });

  it('returns to the main menu when Back button is clicked from a submenu', () => {
    renderDropdownMenu();

    const productsMenuItem = screen.getByText(/products/i);
    fireEvent.click(productsMenuItem);

    const backButton = screen.getByText(/back/i);
    fireEvent.click(backButton);

    expect(screen.getByText(/my profile/i)).toBeInTheDocument();
  });

  it('closes the dropdown when the Close Menu button is clicked', () => {
    renderDropdownMenu();

    const closeMenuButton = screen.getByText(/close menu/i);
    fireEvent.click(closeMenuButton);

    expect(onCloseMock).toHaveBeenCalled();
  });

  it('closes the dropdown when clicking outside the menu', () => {
    renderDropdownMenu();

    fireEvent.mouseDown(document);
    expect(onCloseMock).toHaveBeenCalled();
  });

  it('closes the dropdown when the Escape key is pressed', () => {
    renderDropdownMenu();

    fireEvent.keyDown(document, { key: 'Escape' });
    expect(onCloseMock).toHaveBeenCalled();
  });

  it('closes the menu on scroll down', () => {
    renderDropdownMenu();

    // Simulamos el scroll hacia abajo
    fireEvent.scroll(window, { target: { scrollY: 100 } });

    expect(onCloseMock).toHaveBeenCalled();
  });
});