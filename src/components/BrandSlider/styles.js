import styled from 'styled-components';

export const SliderWrapper = styled.div`
  width: 100%;
  background-color: #000;
  padding: 40px 60px 0 60px;
  text-align: center;
`;

export const Title = styled.h2`
  font-size: 3rem;
  color: #FFFFFF;
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 0.4rem;
`;

export const SliderContainer = styled.div`
  display: grid;
  gap: 20px;
  padding:140px 0;
  align-items: center;

  /* Para pantallas grandes: una línea completa */
  grid-template-columns: repeat(6, 1fr);

  @media (max-width: 1276px) {
    /* Para pantallas medianas: tres columnas */
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 620px) {
    /* Para pantallas pequeñas: dos columnas */
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const BrandLogo = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain; /* Para asegurar que el logo no se deforme */
  padding: 10px;
  cursor: pointer;
  transition: all ease 0.7s;

  &:hover {
    transition: all ease 0.7s;
    transform: scale(1.1);
  }
`;