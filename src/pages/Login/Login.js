import React from 'react';
import Footer from '../../components/Footer/footer';
import LoginContent from '../../components/LoginContent/LoginContent';

const Login = () => {
  return (
    <>
      <main role="main" aria-label="Login page">
        <LoginContent aria-label="Login form" />
      </main>
      <Footer aria-label="Footer with navigation and additional links" />
    </>
  );
};

export default Login;