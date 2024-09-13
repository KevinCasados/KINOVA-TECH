import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding: 25px 2.5rem;
  box-sizing: border-box;
  z-index: 1000; 

  @media (max-width: 920px) {
    padding: 25px 1rem;
  }
`;

export const LoginWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.9); /* Ligera transparencia */
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  width: 400px;
  margin-top: 160px;
  margin-bottom: 300px;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FormTitle = styled.h2`
  font-size: 28px;
  margin-bottom: 20px;
  color: #4b126b;
`;

export const InputField = styled.input`
  width: 100%;
  padding: 15px;
  margin: 10px 0;
  border-radius: 5px;
  border: 1px solid #ddd;
  font-size: 16px;
`;

export const PasswordField = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  position: relative;

  span {
    position: absolute;
    right: 10px;
    cursor: pointer;
  }
`;

export const RememberMeContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;

  label {
    margin-left: 5px;
    color: #4b126b;
    font-size: 14px;
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 15px;
  background-color: #00aaff;
  color: #fff;
  border: 2px solid transparent;
  border-radius: 5px;
  font-size: 18px;
  cursor: pointer;
  margin-top: 20px;
  transition: all ease 0.7s;

  &:hover {
    transition: all ease 0.7s;
    background-color: #009ae7;
  }
`;

export const ForgotPasswordLink = styled.a`
  display: block;
  margin-top: 20px;
  color: #4b126b;
  text-decoration: none;
  font-size: 16px;
  text-align: center;

  &:hover {
    text-decoration: underline;
  }
`;

export const HelpContainer = styled.div`
  margin-top: 20px;
`;

export const HelpLink = styled.a`
  color: #4b126b;
  font-size: 16px;
  text-decoration: none;
  text-align: center;

  &:hover {
    text-decoration: underline;
  }
`;

