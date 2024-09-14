import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import LoginContent from '../LoginContent/LoginContent';
import { BrowserRouter as Router } from 'react-router-dom';

describe('LoginContent Component', () => {
  it('renders the login form with email, password, remember me, and submit button', () => {
    render(
      <Router>
        <LoginContent />
      </Router>
    );

    // Verifica que el título "Login" esté presente
    const formTitle = screen.getByText('Login');
    expect(formTitle).toBeInTheDocument();

    // Verifica que el campo de correo electrónico esté presente
    const emailField = screen.getByPlaceholderText('Email');
    expect(emailField).toBeInTheDocument();

    // Verifica que el campo de contraseña esté presente
    const passwordField = screen.getByPlaceholderText('Password');
    expect(passwordField).toBeInTheDocument();

    // Verifica que el checkbox "Remember me" esté presente
    const rememberMeCheckbox = screen.getByLabelText('Remember me');
    expect(rememberMeCheckbox).toBeInTheDocument();

    // Verifica que el botón de inicio de sesión esté presente
    const loginButton = screen.getByRole('button', { name: /login/i });
    expect(loginButton).toBeInTheDocument();

    // Verifica que el enlace "Forgot your password?" esté presente
    const forgotPasswordLink = screen.getByText('Forgot your password?');
    expect(forgotPasswordLink).toBeInTheDocument();
  });

  it('toggles password visibility when the eye icon is clicked', () => {
    render(
      <Router>
        <LoginContent />
      </Router>
    );

    // Verifica que el campo de contraseña esté oculto por defecto
    const passwordField = screen.getByPlaceholderText('Password');
    expect(passwordField).toHaveAttribute('type', 'password');

    // Simula el clic en el ícono del ojo para mostrar la contraseña
    const eyeIcon = screen.getByRole('img', { hidden: true });
    fireEvent.click(eyeIcon);

    // Verifica que la contraseña ahora se muestre en texto plano
    expect(passwordField).toHaveAttribute('type', 'text');

    // Simula otro clic para ocultar la contraseña nuevamente
    fireEvent.click(eyeIcon);

    // Verifica que la contraseña vuelva a estar oculta
    expect(passwordField).toHaveAttribute('type', 'password');
  });

  it('remembers the user when the checkbox is checked', () => {
    render(
      <Router>
        <LoginContent />
      </Router>
    );

    // Verifica que el checkbox "Remember me" esté presente y no esté seleccionado por defecto
    const rememberMeCheckbox = screen.getByLabelText('Remember me');
    expect(rememberMeCheckbox).not.toBeChecked();

    // Simula el clic en el checkbox
    fireEvent.click(rememberMeCheckbox);

    // Verifica que ahora el checkbox esté seleccionado
    expect(rememberMeCheckbox).toBeChecked();
  });
});