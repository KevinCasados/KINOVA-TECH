import styled from 'styled-components';

export const BuyOptionsContainer = styled.div`
  padding: 20px;
  background-color: #000;
  color: #fff;
  position: relative;
  max-width: 100%;
  overflow: hidden; /* Ocultar los productos que están fuera de vista */
`;

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 50px;
  font-size: 24px;
  margin-top: 35px;
  text-transform: uppercase;
  letter-spacing: .5px;
`;

export const CarouselWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden; /* Ocultar los productos que están fuera de vista */
  width: 100%;
  position: relative;
`;

export const ProductsGrid = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out; /* Animación de transición */
  width: ${({ totalPages }) => totalPages * 100}%; /* Ancho total basado en el número de páginas */
`;

export const ProductCard = styled.div`
  flex: 0 0 calc(33.33% - 20px); /* Cada producto ocupa un tercio del ancho */
  max-width: calc(33.33% - 20px);
  min-width: calc(33.33% - 20px); /* Aseguramos que cada producto ocupe siempre un tercio del espacio */
  padding: 10px;
  box-sizing: border-box; /* Asegura que el padding no afecte el tamaño */
`;

export const ArrowLeft = styled.div`
  cursor: pointer;
  font-size: 24px;
  margin-right: 10px;
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
`;

export const ArrowRight = styled.div`
  cursor: pointer;
  font-size: 24px;
  margin-left: 10px;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
`;

export const DotWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 15px;
`;

export const Dot = styled.div`
  height: 10px;
  width: 10px;
  background-color: ${({ active }) => (active ? '#fff' : '#888')};
  border-radius: 50%;
  margin: 0 5px;
  cursor: pointer;
`;

export const ProductImageWrapperOptions = styled.div`
  position: relative;
  padding-inline: 10px;
`;

export const ProductPriceOptions = styled.span`
  font-size: 1.2em;
  font-weight: 600;
  margin: 10px 0;
  color: #00bfff;
`;
