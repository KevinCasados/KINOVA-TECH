import React, { useEffect, useState } from "react";
import ScrollReveal from "scrollreveal";
import LogoKinovaWhite from "../../assets/logo-kinova-letras-blanco.png";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import { useSelector } from 'react-redux'; 
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
  SavedProductsIconWrapper,
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
  
  const totalCartProductsCount = useSelector((state) =>
    state.products.cart.reduce((total, product) => total + product.quantity, 0)
  );

  const savedProductsCount = useSelector((state) => state.products.savedProducts.length);

  const toggleMenu = () => {
    setMenuVisible(prevVisible => !prevVisible);
  };

  const closeMenu = () => {
    setMenuVisible(false);
  };

  // Manejo del teclado para abrir el menú con Enter
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      toggleMenu();
    }
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
      <header aria-label="Main Navigation">
        <HeaderContainer show={showHeader} isAtTop={isAtTop} backgroundColor={backgroundColor} topBackgroundColor={topBackgroundColor}>
          <LeftContainer className="left-container">
            <MenuIcon
              onClick={toggleMenu}
              onKeyDown={handleKeyDown}  // Llamar al método cuando se presione Enter
              tabIndex={0}               // Hacer el icono seleccionable con Tab
              aria-label="Toggle Menu"
              role="button"
            >
              <SlMenu style={{ color: textColor }} />
            </MenuIcon>
          </LeftContainer>
          <Link to="/" aria-label="Kinova Home">
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
              <Link to="/login" aria-label="Login" data-testid="login-icon">
                <LuUser2 style={{ color: textColor }} />
              </Link>
              <Link to="/savedproducts" aria-label="Saved Products" data-testid="saved-products-icon">
                <SavedProductsIconWrapper>
                  <TbHeart style={{ color: textColor }} />
                  {savedProductsCount > 0 && <CartCountIndicator data-testid="saved-products-count">{savedProductsCount}</CartCountIndicator>}
                </SavedProductsIconWrapper>
              </Link>
              <Link to="/cart" aria-label="Shopping Cart" data-testid="cart-icon">
                <CartIconWrapper>
                  <BsCart3 style={{ color: textColor }} />
                  {totalCartProductsCount > 0 && <CartCountIndicator data-testid="cart-count">{totalCartProductsCount}</CartCountIndicator>}
                </CartIconWrapper>
              </Link>
            </IconsContainer>
          </RightContainer>
        </HeaderContainer>
      </header>
      <DropdownMenu isVisible={menuVisible} onClose={closeMenu} />
    </>
  );
};

export default Header;