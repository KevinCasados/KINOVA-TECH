import styled from 'styled-components';

export const BuyOptionsContainer = styled.div`
  padding: 20px;
  padding-bottom: 80px;
  background-color: #000;
  color: #fff;
  position: relative;
  max-width: 100%;
  overflow: hidden;
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
  overflow: hidden;
  width: 100%;
  position: relative;
`;

export const ProductsGrid = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
  width: ${({ totalPages }) => totalPages * 100}%;
`;

export const ProductCard = styled.div`
  flex: 0 0 calc(33.33% - 20px);
  max-width: calc(33.33% - 20px);
  min-width: calc(33.33% - 20px);
  padding: 10px;
  box-sizing: border-box;

  @media (max-width: 1200px) {
    flex: 0 0 calc(50% - 20px);
    max-width: calc(50% - 20px);
  }

  @media (max-width: 720px) {
    flex: 0 0 100%;
    max-width: 100%;
  }
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

  @media (max-width: 1875px) {
    display: none; /* Ocultar en pantallas menores a 1875px */
  }
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

  @media (max-width: 1875px) {
    display: none; /* Ocultar en pantallas menores a 1875px */
  }
`;

export const DotWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 15px;
`;

export const Dot = styled.div`
  height: 15px; /* Aumentar el tamaño de los puntos */
  width: 15px;
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