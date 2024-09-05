import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  background: linear-gradient(0deg, #213944 8.31%, #000000 88.22%);
  color: #fff;
  padding: 40px 22px;
  margin: 0 auto;
`;

export const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 20px;

  @media (max-width: 1200px) {
    flex-direction: column;
    gap: 80px;
  }
`;

export const FooterLeft = styled.div`
  flex: 2;  /* Esto hace que la primera columna sea más ancha */

  @media (max-width: 1200px) {
      width: 100%;
  }
  
`;

export const FooterRight = styled.div`
  flex: 3;  /* Esto hace que las otras columnas ocupen el espacio restante */
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  @media (max-width: 1200px) {
    width: 100%;
  }

  @media (max-width: 684px) {
    flex: 3;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 48px;
  }
`;

export const FooterColumn = styled.div`
  flex: 1;
  padding-left: 20px;

  
`;

export const FooterTitle = styled.h3`
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
`;

export const FooterLink = styled.a`
  color: #cecccc;
  text-decoration: none;
  margin-bottom: 10px;
  display: block;
  font-size: 0.9rem;
  transition: all ease 0.2s;

  &:hover {
    color: #00b8fc;
    transition: all ease 0.2s;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: left;
  margin-top: 20px;

  a {
    color: #fff;
    margin: 0 10px;
    font-size: 1.5rem;
    transition: all ease 0.7s;

    &:hover {
      color: #00aaff;
      transition: all ease 0.7s;
      transform: scale(1.2);
    }
  }
`;

export const SubscribeSection = styled.div`
  h3 {
    font-size: 1.2rem;
    margin-bottom: 20px;
  }

  p {
    margin-bottom: 20px;
    line-height: 1.5;
  }

  div {
    @media (max-width: 684px) {
      width: 100%;
    }
  }

  input {
    padding: 10px;
    margin-right: 10px;
    border-radius: 5px;
    border: 1px solid #333;
    color: #000;
    width: 70%;
    margin-bottom: 10px;

    @media (max-width: 1200px) {
      width: 80%;
    }

    @media (max-width: 684px) {
      width: 100%;
    }
  }

  

  button {
    padding: 10px 20px;
    background-color: #00aaff;
    color: #fff;
    border: 2px solid transparent;
    border-radius: 5px;
    cursor: pointer;
    transition: all ease 0.7s;

    @media (max-width: 1200px) {
      width: 18%;
    }

    @media (max-width: 684px) {
      width: 100%;
    }
  

    &:hover {
      transition: all ease 0.7s;
      background-color: transparent;
      border-color: #00aaff; 
      color: #fff; 
    }
  }

  
`;

export const FooterBottom = styled.div`
  font-size: 0.8rem;
  color: #888;
  margin-top: 20px;
  text-align: center;
  padding-top: 20px;
  border-top: 1px solid #333;
`;

