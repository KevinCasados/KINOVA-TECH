import styled from "styled-components";
import HeroImageHeadPhones from "../../assets/hero-headphones.png"

export const HeroContainer = styled.section`
    background: transparent;
    min-height: 96vh; 
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-top: 130px;
    z-index: 1;

    @media (max-width: 620px) {
        flex-direction: column;
        gap: 20px;
    }
`;

export const HeroTextContainer = styled.div`
    display: flex;
    position: relative;
    max-width: 80%; 
    line-height: 1.5;
    padding-left: 2.5rem;   
    z-index: 1;

    @media (max-width: 620px) {
        padding-left: 0; 
    }
`;

export const HeroTitle = styled.h1`
    font-size: max(54px, 11.806vw);
    letter-spacing: -.0608em;
    line-height: 80%;
    font-weight: 600;
    color: #e3e3e3;
    font-family: "Arimo", Arial, Helvetica, sans-serif;

    @media (max-width: 620px) {
        text-align: center;
        font-size: max(54px, 15.806vw);
    }
    
`;

export const HeroImageContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    position: relative;
    z-index: 0;
    right: 0;
    top: 0;
    max-width: 45%;

    @media (max-width: 620px) {
        justify-content: center;
    }
`;

export const HeroImage = styled.img`
    width: 97%;
    padding-bottom: 4.5rem;

    @media (max-width: 620px) {
        width: 160%;
    }
`;


