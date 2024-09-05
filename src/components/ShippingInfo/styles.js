import styled from 'styled-components';

export const ShippingContainer = styled.div`
  display: grid;
  gap: 20px;
  padding: 40px 20px 135px 20px;
  background-color: #000;  /* Fondo oscuro para todo el contenedor */

  /* Para pantallas grandes: tres columnas */
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: 768px) {
    /* Para pantallas medianas: una columna */
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const InfoBox = styled.div`
  background-color: #3b072e; /* Fondo más claro pero aún oscuro para los cuadros */
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);  /* Sombras para darle profundidad */
`;

export const Title = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: #ffffff;  /* Texto blanco para contraste */
  text-transform: uppercase;
`;

export const Description = styled.p`
  font-size: 1rem;
  color: #cccccc;  /* Texto gris claro para un mejor contraste */
`;

export const Icon = styled.div`
  font-size: 2rem;
  margin-bottom: 10px;
  color: #00B8FC;  /* Un color verde brillante para los iconos */
`;