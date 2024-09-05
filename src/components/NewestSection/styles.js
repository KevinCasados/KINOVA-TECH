import styled from "styled-components";

export const SectionContainer = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 4rem 2rem 8rem 2rem;
    max-width: 1620px;
    margin: 0 auto;

    @media (max-width: 920px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 41px;
    } 
`;

export const SectionTextContainer = styled.div`
    width: 100%; 
    text-align: center;
    margin-bottom: 2rem; 
`;

export const SectionTitle = styled.h2`
    text-transform: uppercase;
    font-weight: 700; 
    font-size: 2.5rem; 
    margin-bottom: 0.5rem; 
    color: #00B8FC;
`;

export const SectionSubtitle = styled.h3`
    font-weight: 400;
    font-size: 1.2rem; 
    color: #e3e3e3; 
    margin-bottom: 2rem;
`;

export const CategoryCard = styled.div`
    width: 30%;
    text-align: center;
    overflow: hidden; /* Esto asegura que la imagen no se salga del contenedor */
    height: 30.042vw; /* Ajusta esta altura según lo que necesites */
    position: relative; /* Para posicionar el texto correctamente */
    border-radius: 6%;

    a {
        text-decoration: none;
        color: inherit;
        display: block; /* Para que el enlace envuelva toda la tarjeta */
    }

    &:hover .shop-now {
        transform: translateY(0); /* Muestra el rectángulo al hacer hover */
    }

    @media (max-width: 920px) {
        width: 100%;
        border-radius: 20px;
    } 
`;

export const CategoryImage = styled.img`
    width: 100%;
    height: 100%; /* Asegúrate de que la imagen cubra todo el contenedor */
    object-fit: cover; /* Esto asegurará que la imagen se escale y recorte para llenar el contenedor */
    cursor: pointer;
    transition: transform 0.5s ease-in-out;
    background-size: 50%;
    object-position: center;
    overflow: hidden    ;
    
    /* Aplicando un filtro oscuro constante */
    filter: brightness(55%);
    
    &:hover {
        transform: scale(1.1); /* Escala la imagen en hover */
    }
`;

export const CategoryText = styled.p`
    font-family: "Poppins", Arial, Helvetica, sans-serif;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); /* Centra el texto tanto horizontal como verticalmente */
    font-size: 1.5rem; /* Aumenta ligeramente el tamaño de la fuente si lo deseas */
    font-weight: 700; /* Aumenta el grosor de la fuente para mayor visibilidad */
    color: #e3e3e3;
    text-transform: uppercase;
    text-align: center; /* Asegura que el texto esté centrado */
    z-index: 2; /* Asegura que el texto esté por encima de la imagen */
    pointer-events: none; /* Para que el hover no afecte el texto sino la imagen */

    @media (max-width: 620px) {
        font-size: 1rem;
    }
`;

export const ShopNow = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.8);
    color: #00B8FC;
    padding: 1rem;
    text-align: center;
    text-transform: uppercase;
    font-weight: 500;
    transform: translateY(100%); /* Oculta el rectángulo inicialmente */
    transition: transform 0.3s ease-in-out;
    z-index: 3; /* Asegura que el rectángulo esté por encima del texto */
    pointer-events: none; /* Para que no interfiera con el hover de la imagen */
`;
