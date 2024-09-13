import styled from 'styled-components';

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  max-width: 1200px;
  margin: 20px auto 20px auto;
  padding: 0 20px;
`;

export const TitleText = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: #333;

  & span {
    color: #009AFC;
  }
`;

export const Line = styled.div`
  flex-grow: 1;
  height: 3px;
  background-color: #000;
  margin-left: 10px;
  max-width: 120px;
`;

export const CartContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

// Contenedor de los ítems del carrito con altura limitada y scroll
export const CartItemsContainer = styled.div`
  max-height: 455px; /* Altura máxima para scroll */
  min-height: 455px; /* Altura mínima para mantener espacio para 3 productos */
  overflow-y: auto;  /* Habilita el scroll si hay más de 3 productos */
  margin-bottom: 20px;
`;

export const CartItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 19px;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #f9f9f9;
`;

export const CartImage = styled.img`
  width: 100px;
  height: 100px;
`;

export const CartDetails = styled.div`
  flex: 1;
  margin-left: 20px;
  
  h4 {
    margin: 5px 0;
  }

  p {
    margin: 5px 0;
    font-size: 14px;
    color: #555;
  }
`;

export const CartQuantity = styled.input`
  width: 50px;
  padding: 5px;
  border: 1px solid #ddd;
  border-radius: 4px;
  text-align: center;
`;

export const RemoveButton = styled.button`
    background-color: #e74c3c00;
    color: #000;
    border: none;
    padding: 10px;
    cursor: pointer;
    border-radius: 5px;
    font-weight: bold;
    font-size: 25px;
`;

export const CartTotals = styled.div`
  margin-top: 0;
  margin-bottom: 50px;
  text-align: right;
  font-size: 18px;
  
  h3 {
    margin-bottom: 20px;
    font-size: 24px;
  }

  p {
    font-size: 18px;
    margin: 15px 0;
    display: flex;
    justify-content: space-between;
  }

  /* Añadir líneas antes y después de Shipping Fee */
  p:nth-child(3) {
    border-top: 1px solid #ddd;
    padding-top: 15px;
    border-bottom: 1px solid #ddd;
    padding-bottom: 15px;
    
  }

  p:nth-child(4) {
    padding-bottom: 10px;
  }

  /* Aplicar negritas a "Total" y su valor */
  p:nth-child(5) {
    font-weight: bold;
    font-size: 20px;
  }
`;

export const PriceText = styled.span`
  font-weight: normal;
`;

export const TotalPriceText = styled.span`
  font-weight: bold;
`;

export const ProceedButton = styled.button`
  background-color: #009AFC;
  border: 3px solid transparent;
  color: #fff;
  padding: 15px 30px;
  cursor: pointer;
  border-radius: 5px;
  font-weight: 500;
  text-transform: uppercase;
  margin-top: 20px;
  transition: all ease 0.5s;

  &:hover {
    color: #00B8FC;
    background-color: transparent;
    border: 3px solid #00B8FC;
    transition: all ease 0.5s;
  }
`;

// Estilos para el contenedor del estado vacío
export const EmptyStateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 500px; /* Ajustar para ocupar el espacio */
  width: 100%;
`;

export const EmptyImage = styled.img`
  width: 250px;
  margin-bottom: 20px;
`;

export const EmptyMessage = styled.h2`
  font-size: 20px;
  margin-bottom: 10px;
`;

export const ReturnButton = styled.button`
  background-color: #000;
  color: white;
  padding: 15px 30px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  font-weight: bold;
  margin-top: 20px;

  &:hover {
    background-color: #333;
  }
`;

export const CartTotalTitleContainer = styled.h2`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  max-width: 1200px;
  margin: 20px auto 50px auto;
`;

export const CartTotalTitleText = styled.h2`
  font-size: 24px;
  font-weight: bold;
  color: #333;

  & span {
    color: #009AFC;
  }
`;

export const CartTotalLine = styled.h2`
  flex-grow: 1;
  height: 3px;
  background-color: #000;
  margin-left: 10px;
  max-width: 120px;
`;
