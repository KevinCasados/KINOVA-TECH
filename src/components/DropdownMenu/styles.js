import styled from "styled-components";

export const DropdownContainer = styled.div`
  position: fixed;
  top: 93px;
  left: ${({ isVisible }) => (isVisible ? "0" : "-300px")};
  width: 300px;
  background-color: #242526;
  transition: all 0.3s ease-in-out;
  z-index: 1000;
  box-shadow: 2px 0px 5px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border: 1px solid #474a4d;
  border-radius: 8px;
  padding: 1rem;
  overflow: hidden;

  .menu-primary-enter {
    position: absolute;
    transform: translateX(-110%);
  }
  .menu-primary-enter-active {
    transform: translateX(0%);
    transition: all 500ms ease;
  }
  .menu-primary-exit {
    position: absolute;
  }
  .menu-primary-exit-active {
    transform: translateX(-110%);
    transition: all 500ms ease;
  }

  .menu-secondary-enter {
    position: absolute;
    transform: translateX(110%);
  }
  .menu-secondary-enter-active {
    transform: translateX(0%);
    transition: all 500ms ease;
  }
  .menu-secondary-exit {
    position: absolute;
  }
  .menu-secondary-exit-active {
    transform: translateX(110%);
    transition: all 500ms ease;
  }
`;

export const DropdownItem = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  border-radius: 8px;
  transition: background 500ms;
  padding: 0.5rem;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #525357;
  }

  & svg {
    margin-right: auto;
  }

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: inherit; /* Mantiene el color del texto como el de DropdownItem */
    width: 100%;
  }

`;

export const SecondaryMenu = styled.div`
  width: 100%;
`;

export const BackButton = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  border-radius: 8px;
  transition: background 500ms;
  padding: 0.5rem;
  color: #fff;
  cursor: pointer;
  background-color: #242526;  

  & svg {
    margin-right: 10px;
  }

  &:hover {
    background-color: #525357;
  }
`;

export const CloseButton = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  border-radius: 8px;
  transition: background 500ms;
  padding: 0.5rem;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #525357;
  }

  & svg {
    margin-right: auto;
  }
`;