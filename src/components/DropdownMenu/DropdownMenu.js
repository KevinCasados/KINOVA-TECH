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
  FaBookmark,
  FaHeadset,
  FaDownload,
  FaShippingFast,
  FaMouse,
  FaKeyboard,
  FaHeadphones,
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

  return (
    <DropdownContainer isVisible={isVisible} style={{ height: menuHeight }} className="dropdown-container">
      <CSSTransition
        in={activeMenu === "main"}
        unmountOnExit
        timeout={500}
        classNames="menu-primary"
        onEnter={calcHeight}
      >
        <div>
          <DropdownItem onClick={onClose}>
            <FaArrowLeft style={{ marginRight: "10px" }} />
            Close Menu
          </DropdownItem>
          <DropdownItem>
            <Link to="/login">
              <FaUserCircle style={{ marginRight: "10px" }} />
              My Profile
            </Link>
          </DropdownItem>
          <DropdownItem>
            <Link to="/cart">
              <FaShoppingCart style={{ marginRight: "10px" }} />
              Cart
            </Link>
          </DropdownItem>
          <DropdownItem onClick={() => setActiveMenu("products")}>
            <AiFillProduct style={{ marginRight: "10px" }} />
            Products
          </DropdownItem>
          <DropdownItem>
            <Link to="/savedproducts">
              <FaBookmark style={{ marginRight: "10px" }} />
              Saved Products
            </Link>
          </DropdownItem>
          <DropdownItem onClick={() => setActiveMenu("support")}>
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
        <SecondaryMenu>
          <BackButton onClick={() => setActiveMenu("main")}>
            <FaArrowLeft /> Back
          </BackButton>
          <DropdownItem>
            <Link to="/products">
              <AiFillAppstore style={{ marginRight: "10px" }} />
              All
            </Link>
          </DropdownItem>
          <DropdownItem>
            <Link to="/products/mouses">
              <FaMouse style={{ marginRight: "10px" }} />
              Mouse
            </Link>
          </DropdownItem>
          <DropdownItem>
            <Link to="/products/keyboards">
              <FaKeyboard style={{ marginRight: "10px" }} />
              Keyboards
            </Link>
          </DropdownItem>
          <DropdownItem>
            <Link to="/products/headphones">
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
        <SecondaryMenu>
          <BackButton onClick={() => setActiveMenu("main")}>
            <FaArrowLeft /> Back
          </BackButton>
          <DropdownItem>
              <Link to="/downloads">
                <FaDownload style={{ marginRight: "10px" }} />
                Downloads
              </Link>
          </DropdownItem>
          <DropdownItem>
              <Link to="/customer-support">
                <FaHeadset style={{ marginRight: "10px" }} />
                Customer Support
              </Link>
          </DropdownItem>
          <DropdownItem>
              <Link to="/warranty">
                <FaCog style={{ marginRight: "10px" }} />
                Warranty
              </Link>
          </DropdownItem>
          <DropdownItem>
              <Link to="/shipping-returns">
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