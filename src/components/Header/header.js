import React, { useEffect, useState } from "react";
import ScrollReveal from "scrollreveal";
import LogoKinovaWhite from "../../assets/logo-kinova-letras-blanco.png";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import {
  CenterContainer,
  HeaderContainer,
  IconsContainer,
  LeftContainer,
  LogoKinova,
  MenuIcon,
  RightContainer,
} from "./styles";
import { SlMenu } from "react-icons/sl";
import { BsCart3 } from "react-icons/bs";
import { TbHeart } from "react-icons/tb";
import { LuUser2 } from "react-icons/lu";
import { Link } from "react-router-dom";

const Header = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isAtTop, setIsAtTop] = useState(true);
  const [menuVisible, setMenuVisible] = useState(false);

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
      <HeaderContainer show={showHeader} isAtTop={isAtTop}>
        <LeftContainer className="left-container">
          <MenuIcon onClick={toggleMenu}>
            <SlMenu />
          </MenuIcon>
        </LeftContainer>
          <Link to="/">
            <CenterContainer>   
              <LogoKinova src={LogoKinovaWhite} className="logo-kinova" />
            </CenterContainer>
          </Link>
        <RightContainer className="right-container">
          <IconsContainer>
            <Link to="/login">
              <LuUser2 />
            </Link>
            <Link to="/savedproducts">
              <TbHeart />
            </Link>
            <Link to="/cart">
              <BsCart3 />
            </Link>
          </IconsContainer>
        </RightContainer>
      </HeaderContainer>
      <DropdownMenu isVisible={menuVisible} onClose={closeMenu} />
    </>
  );
};

export default Header;