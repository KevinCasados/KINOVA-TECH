import styled from "styled-components";
import SwitchImage from "../../assets/click-mecanico-dragon-v2-fix.jpg"; // Ruta correcta de tu imagen

export const SectionTitle = styled.h2`
  font-size: 4rem;
  text-align: center;
  color: #00B8FC;
  font-weight: bold;
  background-color: #000;
  padding-top: 100px;
  padding-bottom: 100px;
  text-transform: uppercase;

  @media (max-width: 920px) {
    padding-top: 0px;
  }
`;

export const SectionTitleText = styled.h2`
  font-size: 4rem;
  text-align: center;
  color: #00B8FC;
  font-weight: bold;
  background-color: #000;
  padding-top: 200px;
  text-transform: uppercase;
`;

export const WhyBetterContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #000;
  padding: 0rem 2rem 0rem 2rem;
  width: 100%;
  box-sizing: border-box;
  position: relative;
  overflow: hidden; /* Asegura que nada se salga del contenedor */

  @media (max-width: 920px) {
    flex-direction: column;
    padding-top: 100px;
  }
`;

export const BackgroundImageContainer = styled.div`
  background-image: url(${SwitchImage});
  background-size: 20%; /* Ajusta el tamaño de la imagen */
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 0;
  overflow: hidden; /* Asegura que la imagen no se salga del contenedor */

  @media (max-width: 920px) {
    display: none;
  }
`;

export const TextGroupContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 28%;
  z-index: 1;
  padding-top: 100px;

  @media (max-width: 920px) {
    width: 100%;
    padding-top: 0;
  }
`;

export const TextGroup = styled.div`
  margin-bottom: 15rem;
  text-align: center;

  @media (max-width: 920px) {
    margin-bottom: 10rem;
  }
`;

export const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: #00B8FC;
`;

export const FeatureDescription = styled.p`
  font-size: 1rem;
  color: #e3e3e3;
  max-width: 400px;
`;
  
export const Icon = styled.div`
  font-size: 3rem;
  color: #00B8FC;
`;