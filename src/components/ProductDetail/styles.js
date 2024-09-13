import styled from 'styled-components';

export const ProductContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-inline: 20px;
  padding-top: 277px;
  padding-bottom: 277px;
  background-color: #F4F4F4;
  color: #000;
  gap: 50px;

  @media (max-width: 1160px) {
    padding-top: 120px;
    flex-direction: column;
    align-items: center;
    gap: 25px;
  }
`;

export const ProductImageContainer = styled.div`
  max-width: 50%;
  height: auto;
  overflow: hidden;
  position: relative;
  cursor: ${({ isZoomed }) => (isZoomed ? 'zoom-out' : 'zoom-in')};  /* Cambia el cursor cuando está en zoom */

  @media (max-width: 1160px) {
    max-width: 100%;
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  height: auto;
  transform: ${({ isZoomed }) => (isZoomed ? 'scale(5)' : 'scale(1.3)')};  /* Zoom activado con escala 3 */
  transform-origin: ${({ isZoomed, position }) => isZoomed ? `${position.x}% ${position.y}%` : '50% 50%'};  /* Movimiento instantáneo */
  transition: transform 0.3s ease;  /* Transición suave solo para la escala, no el origen */
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 20px;
  max-width: 23%;
  padding-top: 112px;

  @media (max-width: 1160px) {
    width: 100%;
    max-width: 100%;
    padding-top: 0;
    padding-right: 20px;
    max-width: 830px;
  }
`;

export const ProductSeries = styled.span`
  font-size: 14px;
  color: #888;
  margin-bottom: 10px;
`;

export const ProductTitle = styled.h1`
  font-size: 32px;
  margin: 0 0 10px 0;
`;

export const ProductDescription = styled.p`
  font-size: 18px;
  margin-bottom: 10px;
`;

export const ProductPrice = styled.p`
  font-size: 24px;
  font-weight: bold;
  color: #00bfff;
  margin: 20px 0;
`;

export const BuyButton = styled.button`
  padding: 20px 20px;
  font-size: 16px;
  background-color: #009AFC;
  color: #fff;
  border: 3px solid transparent;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 500;
  text-transform: uppercase;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #00B8FC;
    border: 3px solid #00B8FC;
    transition: all ease 0.5s;
  }

  @media (max-width: 1160px) {
    padding: 25px 20px;
  }
`;

export const ProductDetails = styled.p`
  font-size: 16px;
  color: #aaa;
  margin-top: 20px;
`;