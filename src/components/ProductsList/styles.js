import styled, { keyframes } from 'styled-components';
import { BsCart3 } from 'react-icons/bs';

// Definir los keyframes
const reflow = keyframes`
  0% {
    transform: scale(0.95);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

const slideDown = keyframes`
  0% {
    max-height: 0;
    opacity: 0;
  }
  100% {
    max-height: 500px; /* Un valor suficiente para contener los filtros */
    opacity: 1;
  }
`;

const slideUp = keyframes`
  0% {
    max-height: 500px;
    opacity: 1;
  }
  100% {
    max-height: 0;
    opacity: 0;
  }
`;

const slideIn = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
`;

const slideOut = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
`;

export const ProductsContainer = styled.div`
  display: flex;
  gap: 20px;
  background-color: #fff;
  max-width: 1660px; /* Limita el ancho máximo */
  width: 100%; /* Asegura que ocupe el 100% del ancho disponible */
  margin: 50px auto; /* Centra el contenedor con espacios en los lados */
  padding-left: 40px;
  padding-right: 40px;
`;

export const FiltersContainer = styled.div`
  width: 285px;
  padding: 20px 20px 0 0;
  display: block; /* Siempre visible en pantallas grandes */
  
  @media (max-width: 1080px) {
    display: none; /* Oculto en pantallas pequeñas */
  }
  
`;

export const OverlayFiltersContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 285px;
  height: 100vh;
  background-color: white;
  z-index: 1000;
  padding: 20px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.2);
  animation: ${({ showFilters }) => (showFilters ? slideIn : slideOut)} 0.5s forwards;
  overflow-y: auto; /* Para que los filtros sean desplazables en pantallas pequeñas */
`;

export const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  flex: 1;
  transition: all 0.5s ease-in-out;

  @media (max-width: 2064px) {
    grid-template-columns: repeat(3, 1fr); /* Máximo de 3 columnas en pantallas grandes */
  }

  @media (max-width: 1420px) {
    grid-template-columns: repeat(2, 1fr); /* Máximo de 3 columnas en pantallas grandes */
  }

  @media (max-width: 1080px) {
    grid-template-columns: repeat(1, 1fr); /* Máximo de 3 columnas en pantallas grandes */
  }
  
`;

export const ProductImageWrapper = styled.div`
  position: relative; /* Ensures the icons are positioned relative to the image */
`;

export const IconsWrapper = styled.div`
  position: absolute;
  top: 10px;
  right: -50px;  /* Inicialmente fuera de la vista */
  display: flex;
  flex-direction: column;
  gap: 10px; /* Espacio entre el corazón y el ojo */
  transition: all 0.3s ease;
  pointer-events: auto;  /* Permitir la interacción con los íconos */

  ${ProductImageWrapper}:hover &,
  &:hover {
    opacity: 1;  /* Los íconos se muestran cuando el mouse está sobre la imagen o los íconos */
    right: 10px;  /* Mueve los íconos hacia adentro al hacer hover */
  }
`;

export const IconOverlay = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  /* Elimina temporalmente otros estilos para simplificar */
`;


export const ProductCard = styled.div`
  text-align: center;
  border-radius: 10px;
  position: relative; /* Important for positioning the icon overlay */
  overflow: hidden;
  animation: ${reflow} 0.5s ease;
  transition: transform 0.5s ease-in-out;
`;



export const ProductImage = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: 15px;
  transition: transform 0.3s ease;
  cursor: pointer;
`;

export const ProductInfo = styled.div`
  text-align: left;
  padding-inline: 20px;
  padding-bottom: 40px;

  & h2 {
    margin-top: 5px;
    margin-bottom: 10px;
    font-weight: 600;
    display: -webkit-box;
    -webkit-line-clamp: 1; /* Limitar a 2 líneas */
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  & p {
    color: #2f3132;
    font-weight: 300;
    margin: 15px 0;
    display: -webkit-box;
    -webkit-line-clamp: 1; /* Limitar a 2 líneas */
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const ProductPrice = styled.span`
  font-size: 1.2em;
  font-weight: 600;
  margin: 10px 0;
`;

export const AddToCartButton = styled.button`
  background-color: #00B8FC;
  color: #000;
  border: 3px solid transparent;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-size: 1em;
  font-weight: 500;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 15px;
  transition: all ease 0.5s;

  &:hover {
    color: #00B8FC;
    background-color: transparent;
    border: 3px solid #00B8FC;
    transition: all ease 0.5s;
  }
`;

export const CartIcon = styled(BsCart3)`
  font-size: 1.2em;
`;

export const FilterSection = styled.div`
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 3px dotted #ccc;
`;

export const FilterTitle = styled.h4`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  color: #666;
  font-weight: bold;
  text-transform: uppercase;

  & button {
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    margin-left: 10px;
  }

  & svg {
    color: #00B8FC; /* Icono en color azul */
    font-size: 1.2em;
  }
`;

export const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  cursor: pointer;
  font-size: 18px;
  color: #333;
`;

export const CheckboxInput = styled.input`
  margin-right: 10px;
  accent-color: #00aaff; /* Color personalizado para las casillas */
  width: 18px;
  height: 18px;
  border: 1px solid #ccc;
  border-radius: 3px;
  cursor: pointer;
`;

export const MainSortContainer = styled.section`
  background: #f4f4f4;
`;

export const SortContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1490px; /* Limita el ancho máximo */
  width: 100%; /* Asegura que ocupe el 100% del ancho disponible */
  margin: 0 auto; /* Centra el contenedor con espacios en los lados */
  padding: 20px 40px; /* Añade un poco de padding */
  background-color: #f4f4f4; /* Si necesitas un color de fondo */
`;

export const HideFiltersButton = styled.button`
  display: flex;
  align-items: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-weight: 600;
  font-size: 1.2em;
  color: #697172;

  &:hover {
    color: #000;
  }

  @media (max-width: 1080px) {
    display: none; /* Oculto en pantallas pequeñas */
  }
`;

export const SortDropdown = styled.select`
  padding: 5px;
  font-size: 1em;
  border-radius: 5px;
  background-color: #f4f4f4;
  border: 0 solid #ccc;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: 500;
  color: #697172;

  &:hover {
    color: #000;
  }

  & option {
    background-color: #F4F4F4;
  }
`;

export const FilterOptions = styled.div`
  overflow: hidden;
  max-height: ${({ isOpen }) => (isOpen ? '500px' : '0')}; /* Controla la altura */
  animation: ${({ isOpen }) => (isOpen ? slideDown : slideUp)} 0.4s ease forwards;
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')}; /* Controla la opacidad */
  transition: max-height 0.4s ease, opacity 0.4s ease; /* Suaviza las transiciones */
  visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')}; /* Evita parpadeo en cierre */
`;


