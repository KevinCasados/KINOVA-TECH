import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  position: fixed;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  padding: 25px 2.5rem;
  box-sizing: border-box;
  background-color: ${({ topBackgroundColor, backgroundColor, isAtTop, show }) =>
    isAtTop ? topBackgroundColor || "transparent" : show ? backgroundColor || "rgba(0, 0, 0, 0.7)" : "transparent"};
  top: ${({ show }) => (show ? "0" : "-100px")};
  transition: top 0.5s ease-in-out, background-color 0.5s ease-in-out;
  z-index: 1000; 

  @media (max-width: 920px) {
    padding: 25px 1rem;
  }
`;

export const LeftContainer = styled.article`
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  padding-right: 6.125rem;

  @media (max-width: 920px) {
    padding-right: 6.225rem;
  }

  @media (max-width: 620px) {
    padding-right: 5.225rem;
  }
`;

export const MenuIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  transition: background-color 0.3s ease-in-out;

  & svg {
    font-size: 1.5rem;
    cursor: pointer;
    color: #f0f0f0;

    @media (max-width: 920px) {
      font-size: 1.5rem;
    }

    @media (max-width: 620px) {
      font-size: 1.3rem;
    }
  }

  &:hover {
    background-color: rgba(128, 128, 128, 0.3); 
  }

  @media (max-width: 620px) {
    width: 30px;
    height: 30px;
  }
`;

export const CenterContainer = styled.article`
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
`;

export const LogoKinova = styled.img`
  width: 50%;

  @media (max-width: 1280px) {
    width: 45%;
  }

  @media (max-width: 620px) {
    width: 46%;
  }
`;

export const RightContainer = styled.article`
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
`;

export const IconsContainer = styled.div`
  display: flex;
  gap: 25px;

  & a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    transition: background-color 0.3s ease-in-out;

    @media (max-width: 620px) {
      width: 25px;
      height: 25px;
    }

    &:hover {
      background-color: rgba(128, 128, 128, 0.3); 
    }

    & svg {
      font-size: 1.5rem;
      cursor: pointer;
      color: #f0f0f0;

      @media (max-width: 620px) {
        font-size: 1.3rem;
      }
    }
  }

  @media (max-width: 920px) {
    gap: 7px;
  }

  @media (max-width: 620px) {
    gap: 12px;
  }
`;

export const CartIconWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  & svg {
    font-size: 1.5rem;
    color: #f0f0f0;
  }

  @media (max-width: 620px) {
    & svg {
      font-size: 1.3rem;
    }
  }
`;

export const CartCountIndicator = styled.span`
  position: absolute;
  top: -11px;
  right: -10px;
  background-color: #00B8FC;
  color: #000;
  border-radius: 50%;
  width: 20px;  /* Ancho fijo */
  height: 20px; /* Altura fija */
  display: flex;
  align-items: center;
  justify-content: center; /* Asegura que el texto esté centrado */
  font-size: 0.8rem;
  font-weight: 500;
  line-height: 1;
  text-align: center;

  @media (max-width: 620px) {
    width: 18px;
    height: 18px;
    font-size: 0.7rem;
  }
`;