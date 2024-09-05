import styled from "styled-components";

export const CarouselContainer = styled.div`
    position: relative;
    width: 100%;
    height: 89vh;
    overflow: hidden;
`;

export const CarouselSlide = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${props => props.backgroundImage});
    background-size: cover;
    background-position: center;
    opacity: ${props => (props.active ? 1 : 0)};
    transition: opacity 0.5s ease-in-out;
    z-index: 1; /* Asegura que el slide esté por debajo de los botones */
    pointer-events: ${props => (props.active ? 'auto' : 'none')}; /* Permite interacción solo en el slide activo */

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5); /* Capa oscura semi-transparente */
        z-index: 2; /* Capa de sombreado */
    }
`;

export const CarouselContent = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    color: #fff;
    z-index: 2; /* Asegura que el contenido esté sobre la capa oscura */
`;

export const CarouselTitle = styled.h2`
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 1rem;

    @media (max-width: 620px) {
        font-size: 2rem;
    }
`;

export const CarouselSubtitle = styled.p`
    font-size: 1.2rem;
    margin-bottom: 2rem;

    @media (max-width: 620px) {
        font-size: 0.9rem;
    }
`;

export const CarouselButton = styled.button`
    padding: 0.75rem 2rem;
    font-size: 1rem;
    color: #fff;
    background-color: #00aaff;
    border: 2px solid transparent;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease, border-color 0.3s ease;

    &:hover {
        background-color: transparent;
        border-color: #00aaff; 
        color: #fff; 
    }

    @media (max-width: 620px) {
        padding: 0.45rem 1.2rem;
        font-size: 0.9rem;
    }
`;

export const CarouselNav = styled.div`
    position: absolute;
    width: 100%;
    display: flex;
    justify-content: space-between;
    top: 50%;
    transform: translateY(-50%);
    z-index: 3; /* Asegura que los botones estén por encima de todo */
`;

export const NavButton = styled.button`
    background: rgb(0 0 0 / 0%);
    color: #00aaff;
    border: none;
    border-radius: 100%;
    padding: 0.2rem 0.7rem;
    cursor: pointer;
    margin: 0 1rem;
    font-size: 5.5rem;
    transition: background 0.3s ease, transform 0.3s ease, color 0.3s ease;
    z-index: 4; /* Asegura que cada botón esté por encima incluso de la capa oscura */

    &:hover {
        color: #00aaff;
        transform: scale(1.1);
        transition: ease 0.2s;
    }
`;

export const IndicatorsContainer = styled.div`
    position: absolute;
    bottom: 20px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 3;
`;

export const Indicator = styled.div`
    width: 12px;
    height: 12px;
    margin: 0 5px;
    background-color: ${props => (props.active ? "#00aaff" : "#fff")};
    border-radius: 50%;
    transition: background-color 0.3s ease;
    cursor: pointer;    

    @media (max-width: 620px) {
        width: 10px;
        height: 10px;
    }
`;