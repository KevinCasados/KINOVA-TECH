import React, { useEffect, useState } from "react";
import ScrollReveal from "scrollreveal";
import LogoKinovaWhite from "../../assets/logo-kinova-letras-blanco.png";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import { useSelector } from 'react-redux'; // Importar useSelector para acceder al estado de Redux
import {
  CenterContainer,
  HeaderContainer,
  IconsContainer,
  LeftContainer,
  LogoKinova,
  MenuIcon,
  RightContainer,
  CartIconWrapper,
  CartCountIndicator,
  SavedProductsIconWrapper, // Añadimos el wrapper para el ícono de corazón
} from "./styles";
import { SlMenu } from "react-icons/sl";
import { BsCart3 } from "react-icons/bs";
import { TbHeart } from "react-icons/tb";
import { LuUser2 } from "react-icons/lu";
import { Link } from "react-router-dom";

const Header = ({ backgroundColor, textColor, topBackgroundColor }) => {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isAtTop, setIsAtTop] = useState(true);
  const [menuVisible, setMenuVisible] = useState(false);
  
  // Obtener la cantidad total de productos en el carrito (incluidos los repetidos)
  const totalCartProductsCount = useSelector((state) =>
    state.products.cart.reduce((total, product) => total + product.quantity, 0)
  );

  // Obtener la cantidad de productos guardados (savedProducts)
  const savedProductsCount = useSelector((state) => state.products.savedProducts.length);

  const toggleMenu = () => {
    setMenuVisible(prevVisible => !prevVisible);
  };

  const closeMenu = () => {
    setMenuVisible(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }

      setIsAtTop(window.scrollY === 0);
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  useEffect(() => {
    const sr = ScrollReveal({
      distance: "30px",
      duration: 1500,
      delay: 200,
      reset: false,
    });

    sr.reveal(".logo-kinova", { origin: "top", delay: 100 });
    sr.reveal(".left-container", { origin: "left", delay: 100 });
    sr.reveal(".right-container", { origin: "right", delay: 100 });
  }, []);

  return (
    <>
      <HeaderContainer show={showHeader} isAtTop={isAtTop} backgroundColor={backgroundColor} topBackgroundColor={topBackgroundColor}>
        <LeftContainer className="left-container">
          <MenuIcon onClick={toggleMenu} data-testid="menu-icon">
            <SlMenu style={{ color: textColor }} />
          </MenuIcon>
        </LeftContainer>
        <Link to="/" data-testid="logo-link">
          <CenterContainer>
            <LogoKinova
              src={LogoKinovaWhite}
              className="logo-kinova"
              alt="Kinova Logo"
              data-testid="logo"
            />
          </CenterContainer>
        </Link>
        <RightContainer className="right-container">
          <IconsContainer>
            <Link to="/login" data-testid="login-icon">
              <LuUser2 style={{ color: textColor }} />
            </Link>
            <Link to="/savedproducts" data-testid="saved-products-icon">
              <SavedProductsIconWrapper>
                <TbHeart style={{ color: textColor }} />
                {/* Mostrar el indicador solo si hay productos guardados */}
                {savedProductsCount > 0 && <CartCountIndicator data-testid="saved-products-count">{savedProductsCount}</CartCountIndicator>}
              </SavedProductsIconWrapper>
            </Link>
            <Link to="/cart" data-testid="cart-icon">
              <CartIconWrapper>
                <BsCart3 style={{ color: textColor }} />
                {/* Mostrar el indicador con el total de productos en el carrito */}
                {totalCartProductsCount > 0 && <CartCountIndicator data-testid="cart-count">{totalCartProductsCount}</CartCountIndicator>}
              </CartIconWrapper>
            </Link>
          </IconsContainer>
        </RightContainer>
      </HeaderContainer>
      <DropdownMenu isVisible={menuVisible} onClose={closeMenu} />
    </>
  );
};

export default Header;