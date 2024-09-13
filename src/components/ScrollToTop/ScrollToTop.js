import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Retrasar el scroll para que no interfiera con las animaciones
    const timeoutId = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 50); // Retraso de 50ms para permitir que las animaciones inicien correctamente

    return () => {
      clearTimeout(timeoutId); // Limpiar el timeout si se desmonta el componente
    };
  }, [pathname]);

  return null;
};

export default ScrollToTop;