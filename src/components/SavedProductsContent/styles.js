import styled from 'styled-components';

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  max-width: 1660px;  /* Limitar el ancho máximo */
  margin: 20px auto 20px auto;  /* Centrar el título horizontalmente */
  padding: 0 20px;  /* Un poco de padding para pantallas más pequeñas */
`;

export const TitleText = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: #333;

  & span {
    color: #009AFC; /* Color gris claro para "YOUR" */
  }
`;

export const Line = styled.div`
  flex-grow: 1;
  height: 3px;
  background-color: #000;
  margin-left: 10px;
  max-width: 120px;  /* Ajustar la longitud de la línea */
`;

export const EmptyStateContainer = styled.div`
  text-align: center;
  margin-top: 50px;
  max-width: 1660px;  /* Limitar el ancho máximo del contenedor vacío */
  margin: 80px auto;
  padding: 30px 20px 80px 20px;  /* Un poco de padding para pantallas más pequeñas */
`;

export const EmptyImage = styled.img`
  width: 250px;
  margin-bottom: 20px;
`;

export const EmptyMessage = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const ReturnButton = styled.button`
  background-color: #009AFC;
  color: #fff;
  border: 3px solid transparent;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 30px;
  transition: all ease 0.5s;

  &:hover {
    color: #00B8FC;
    background-color: transparent;
    border: 3px solid #00B8FC;
    transition: all ease 0.5s;
  }
`;

export const ProductsContainer = styled.div`
  max-width: 1660px;
  padding: 20px 60px;   /* Limitar el ancho máximo */
  margin: 0 auto;  /* Centrar el contenedor */
  padding: 20px 60px;  /* Padding para evitar que el contenido toque los bordes en pantallas pequeñas */
`;