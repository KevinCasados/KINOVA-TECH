import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import { Link } from "react-router-dom";
import {
  DropdownContainer,
  DropdownItem,
  SecondaryMenu,
  BackButton,
} from "./styles";
import {
  FaUserCircle,
  FaCog,
  FaArrowLeft,
  FaShoppingCart,
  FaHeadset,
  FaDownload,
  FaShippingFast,
  FaMouse,
  FaKeyboard,
  FaHeadphones,
  FaHeart,
} from "react-icons/fa";
import { AiFillAppstore, AiFillProduct } from "react-icons/ai";

const DropdownMenu = ({ isVisible, onClose }) => {
  const [activeMenu, setActiveMenu] = useState("main");
  const [menuHeight, setMenuHeight] = useState(null);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    if (menuHeight === null && isVisible) {
      const initialMenuHeight = document.querySelector('.menu-primary')?.offsetHeight;
      const containerPadding = 32; // Sumar el padding superior e inferior del contenedor
      setMenuHeight(initialMenuHeight + containerPadding);
    }
  }, [menuHeight, isVisible]);

  function calcHeight(el) {
    const height = el.offsetHeight;
    const containerPadding = 32; // Sumar el padding superior e inferior del contenedor
    setMenuHeight(height + containerPadding);
  }

  // Manejar el cierre del menú al hacer scroll hacia abajo
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        onClose();
      }
      setLastScrollY(window.scrollY);
    };

    if (isVisible) {
      window.addEventListener('scroll', handleScroll);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY, isVisible, onClose]);

  // Manejar el cierre del menú al hacer clic fuera del contenedor o al presionar la tecla Escape
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isVisible && !event.target.closest('.dropdown-container')) {
        onClose();
      }
    };

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isVisible, onClose]);

  // Manejar la navegación por teclado
  const handleKeyDown = (event, action) => {
    if (event.key === 'Enter' || event.key === ' ') {
      action();
    }
  };

  return (
    <DropdownContainer
      isVisible={isVisible}
      style={{ height: menuHeight }}
      className="dropdown-container"
      role="menu"
      aria-label="Dropdown navigation menu"
    >
      <CSSTransition
        in={activeMenu === "main"}
        unmountOnExit
        timeout={500}
        classNames="menu-primary"
        onEnter={calcHeight}
      >
        <div>
          <DropdownItem
            role="menuitem"
            tabIndex="0"
            onClick={onClose}
            onKeyDown={(e) => handleKeyDown(e, onClose)}
            aria-label="Close Menu"
          >
            <FaArrowLeft style={{ marginRight: "10px" }} />
            Close Menu
          </DropdownItem>
          <DropdownItem role="menuitem" tabIndex="0">
            <Link to="/login" aria-label="Go to My Profile">
              <FaUserCircle style={{ marginRight: "10px" }} />
              My Profile
            </Link>
          </DropdownItem>
          <DropdownItem role="menuitem" tabIndex="0">
            <Link to="/cart" aria-label="Go to Cart">
              <FaShoppingCart style={{ marginRight: "10px" }} />
              Cart
            </Link>
          </DropdownItem>
          <DropdownItem
            role="menuitem"
            tabIndex="0"
            onClick={() => setActiveMenu("products")}
            onKeyDown={(e) => handleKeyDown(e, () => setActiveMenu("products"))}
            aria-label="Go to Products"
          >
            <AiFillProduct style={{ marginRight: "10px" }} />
            Products
          </DropdownItem>
          <DropdownItem role="menuitem" tabIndex="0">
            <Link to="/savedproducts" aria-label="Go to Saved Products">
              <FaHeart style={{ marginRight: "10px" }} />
              Saved Products
            </Link>
          </DropdownItem>
          <DropdownItem
            role="menuitem"
            tabIndex="0"
            onClick={() => setActiveMenu("support")}
            onKeyDown={(e) => handleKeyDown(e, () => setActiveMenu("support"))}
            aria-label="Go to Support"
          >
            <FaHeadset style={{ marginRight: "10px" }} />
            Support
          </DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "products"}
        unmountOnExit
        timeout={500}
        classNames="menu-secondary"
        onEnter={calcHeight}
      >
        <SecondaryMenu role="menu" aria-label="Product categories">
          <BackButton
            role="menuitem"
            tabIndex="0"
            onClick={() => setActiveMenu("main")}
            onKeyDown={(e) => handleKeyDown(e, () => setActiveMenu("main"))}
            aria-label="Go back to main menu"
          >
            <FaArrowLeft /> Back
          </BackButton>
          <DropdownItem role="menuitem" tabIndex="0">
            <Link to="/products" aria-label="View all products">
              <AiFillAppstore style={{ marginRight: "10px" }} />
              All
            </Link>
          </DropdownItem>
          <DropdownItem role="menuitem" tabIndex="0">
            <Link to="/products/mouses" aria-label="View mouse products">
              <FaMouse style={{ marginRight: "10px" }} />
              Mouse
            </Link>
          </DropdownItem>
          <DropdownItem role="menuitem" tabIndex="0">
            <Link to="/products/keyboards" aria-label="View keyboard products">
              <FaKeyboard style={{ marginRight: "10px" }} />
              Keyboards
            </Link>
          </DropdownItem>
          <DropdownItem role="menuitem" tabIndex="0">
            <Link to="/products/headphones" aria-label="View headphone products">
              <FaHeadphones style={{ marginRight: "10px" }} />
              Headphones
            </Link>
          </DropdownItem>
        </SecondaryMenu>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "support"}
        unmountOnExit
        timeout={500}
        classNames="menu-secondary"
        onEnter={calcHeight}
      >
        <SecondaryMenu role="menu" aria-label="Support options">
          <BackButton
            role="menuitem"
            tabIndex="0"
            onClick={() => setActiveMenu("main")}
            onKeyDown={(e) => handleKeyDown(e, () => setActiveMenu("main"))}
            aria-label="Go back to main menu"
          >
            <FaArrowLeft /> Back
          </BackButton>
          <DropdownItem role="menuitem" tabIndex="0">
            <Link to="/" aria-label="Go to Downloads page">
              <FaDownload style={{ marginRight: "10px" }} />
              Downloads
            </Link>
          </DropdownItem>
          <DropdownItem role="menuitem" tabIndex="0">
            <Link to="/" aria-label="Go to Customer Support page">
              <FaHeadset style={{ marginRight: "10px" }} />
              Customer Support
            </Link>
          </DropdownItem>
          <DropdownItem role="menuitem" tabIndex="0">
            <Link to="/" aria-label="Go to Warranty page">
              <FaCog style={{ marginRight: "10px" }} />
              Warranty
            </Link>
          </DropdownItem>
          <DropdownItem role="menuitem" tabIndex="0">
            <Link to="/" aria-label="Go to Shipping and Returns page">
              <FaShippingFast style={{ marginRight: "10px" }} />
              Shipping/Returns
            </Link>
          </DropdownItem>
        </SecondaryMenu>
      </CSSTransition>
    </DropdownContainer>
  );
};

export default DropdownMenu;