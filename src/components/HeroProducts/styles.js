import styled from "styled-components";

export const HeroContainer = styled.section`
  position: relative; 
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 60vh;
  background-image: url(${props => props.backgroundImage});
  background-size: cover;
  background-position: center;
  color: white;
  padding: 0 50px;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${({ overlayColor }) => overlayColor}; /* Color de la capa ajustable */
    z-index: 1; 
  }

  @media (max-width: 620px) {
    padding: 0 25px;
  }
`;

export const HeroContent = styled.div`
  max-width: 600px;
  position: relative;
  z-index: 2; 
`;

export const HeroTitle = styled.h1`
  font-size: 4rem;
  margin-bottom: 1rem;
  text-transform: uppercase;
  font-weight: 600;
`;

export const HeroLine = styled.hr`
  height: 6px;
  background-color: #fff;
  width: 130px;
  border: none;
  margin-bottom: 1.5rem;
`;

export const HeroSubtitle = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;