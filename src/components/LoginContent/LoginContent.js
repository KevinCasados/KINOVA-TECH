import React, { useState } from 'react';
import {
  LoginContainer,
  FormContainer,
  FormTitle,
  InputField,
  PasswordField,
  RememberMeContainer,
  Button,
  ForgotPasswordLink,
  HelpContainer,
  HelpLink,
  LoginWrapper,
  HeaderContainer,
} from './styles';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { CenterContainer, LogoKinova } from '../Header/styles';
import LogoKinovaWhite from "../../assets/logo-kinova-letras-blanco.png";
import { Link } from 'react-router-dom';

const LoginContent = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState({ email: '', password: '' });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const validateForm = () => {
    let valid = true;
    const newError = { email: '', password: '' };

    if (!email.includes('@')) {
      newError.email = 'Please enter a valid email address';
      valid = false;
    }
    if (password.length < 8) {
      newError.password = 'Password must be at least 8 characters long';
      valid = false;
    }

    setError(newError);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Aquí iría la lógica para enviar el formulario
      console.log('Form submitted');
    }
  };

  return (
    <>
      <HeaderContainer>
        <Link to="/" aria-label="Go to homepage">
          <CenterContainer>
            <LogoKinova 
              src={LogoKinovaWhite} 
              className="logo-kinova" 
              alt="Kinova Logo" 
            />
          </CenterContainer>
        </Link>
      </HeaderContainer>

      <LoginWrapper>
        <LoginContainer role="region" aria-labelledby="login-title">
          <FormContainer>
            <FormTitle id="login-title">Login</FormTitle>
            <form onSubmit={handleSubmit} noValidate>
              {/* Label and Input for Email */}
              <label htmlFor="email">Email</label>
              <InputField
                id="email"
                type="email"
                placeholder="Email"
                aria-label="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                aria-describedby={error.email ? 'emailError' : undefined}
                autocomplete="email"
                required
              />
              {error.email && <span id="emailError" role="alert" style={{ color: 'red' }}>{error.email}</span>}

              {/* Label and Input for Password */}
              <label htmlFor="password">Password</label>
              <PasswordField>
                <InputField
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Password"
                  aria-label="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  aria-describedby={error.password ? 'passwordError' : undefined}
                  autocomplete="current-password"
                  required
                />
                <span onClick={togglePasswordVisibility} aria-label={showPassword ? 'Hide password' : 'Show password'}>
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </PasswordField>
              {error.password && <span id="passwordError" role="alert" style={{ color: 'red' }}>{error.password}</span>}

              {/* Remember Me */}
              <RememberMeContainer>
                <input 
                  type="checkbox" 
                  id="rememberMe" 
                  aria-label="Remember me" 
                />
                <label htmlFor="rememberMe">Remember me</label>
              </RememberMeContainer>

              {/* Submit Button */}
              <Button type="submit" aria-label="Login">Login</Button>

              {/* Forgot Password Link */}
              <ForgotPasswordLink href="/forgot-password" aria-label="Forgot your password">
                Forgot your password?
              </ForgotPasswordLink>
            </form>
            {/* Help Link */}
            <HelpContainer>
              <HelpLink href="/contact-us" aria-label="Contact support if you need help">
                Need help? Contact us
              </HelpLink>
            </HelpContainer>
          </FormContainer>
        </LoginContainer>
      </LoginWrapper>
    </>
  );
};

export default LoginContent;