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
import { CenterContainer, LeftContainer, LogoKinova, RightContainer } from '../Header/styles';
import LogoKinovaWhite from "../../assets/logo-kinova-letras-blanco.png";
import { Link } from 'react-router-dom';

const LoginContent = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (

    <>
        <HeaderContainer >
            <Link to="/">
            <CenterContainer>
                <LogoKinova src={LogoKinovaWhite} className="logo-kinova" />
            </CenterContainer>
            </Link>
        </HeaderContainer>

        <LoginWrapper > 
        <LoginContainer>
            <FormContainer>
            <FormTitle>Login</FormTitle>
            <form>
                <InputField type='email' placeholder='Email' required />
                <PasswordField>
                <InputField
                    type={showPassword ? 'text' : 'password'}
                    placeholder='Password'
                    required
                />
                <span onClick={togglePasswordVisibility}>
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
                </PasswordField>
                <RememberMeContainer>
                <input type='checkbox' id='rememberMe' />
                <label htmlFor='rememberMe'>Remember me</label>
                </RememberMeContainer>
                <Button type='submit'>Login</Button>
                <ForgotPasswordLink href='/forgot-password'>
                Forgot your password?
                </ForgotPasswordLink>
            </form>
            <HelpContainer>
                <HelpLink href='/contact-us'>Need help? Contact us</HelpLink>
            </HelpContainer>
            </FormContainer>
        </LoginContainer>
        </LoginWrapper>
    </>
  );
};

export default LoginContent;