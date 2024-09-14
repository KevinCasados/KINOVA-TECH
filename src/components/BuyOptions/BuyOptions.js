import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  ProductCard,
  ProductImage,
  ProductInfo,
  ProductPrice,
  ProductImageWrapper
} from '../ProductsList/styles';
import {
  BuyOptionsContainer,
  Title,
  CarouselWrapper,
  ArrowLeft,
  ArrowRight,
  ProductsGrid,
  DotWrapper,
  Dot,
  ProductImageWrapperOptions,
  ProductPriceOptions
} from './styles';

const BuyOptions = ({ title = "You May Also Like" }) => {
  const products = useSelector((state) => state.products.products);
  const [randomizedProducts, setRandomizedProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3; 
  const maxPages = 3; // Definimos el máximo de 3 páginas
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  useEffect(() => {
    if (products && products.length > 0) {
      const shuffledProducts = [...products].sort(() => 0.5 - Math.random());
      setRandomizedProducts(shuffledProducts);
    }
  }, [products]);

  // Calculamos el total de páginas basado en el número de productos y limitamos a 3 páginas
  const totalPages = Math.min(Math.ceil(randomizedProducts.length / itemsPerPage), maxPages);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => (prevPage - 1 + totalPages) % totalPages);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      handleNextPage(); // Desliza a la izquierda
    }
    if (touchStartX.current - touchEndX.current < -50) {
      handlePreviousPage(); // Desliza a la derecha
    }
  };

  useEffect(() => {
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }, []);

  const paginatedProducts = randomizedProducts.slice(
    currentPage * itemsPerPage,
    currentPage * itemsPerPage + itemsPerPage
  );

  return (
    <BuyOptionsContainer>
      <Title>{title}</Title>
      <CarouselWrapper
        onTouchStart={isTouchDevice ? handleTouchStart : null}
        onTouchMove={isTouchDevice ? handleTouchMove : null}
        onTouchEnd={isTouchDevice ? handleTouchEnd : null}
      >
        {window.innerWidth > 1875 && (
          <>
            <ArrowLeft onClick={handlePreviousPage}>{'<'}</ArrowLeft>
            <ArrowRight onClick={handleNextPage}>{'>'}</ArrowRight>
          </>
        )}
        <ProductsGrid>
          {paginatedProducts.map((product) => (
            <ProductCard key={product.id}>
              <ProductImageWrapperOptions>
                <Link to={`/products/${product.id}`}>
                  <ProductImage src={`${process.env.PUBLIC_URL}${product.image}`} alt={product.name} />
                </Link>
              </ProductImageWrapperOptions>
              <ProductInfo>
                <h2>{product.name}</h2>
                <ProductPriceOptions>{formatPrice(product.price)}</ProductPriceOptions>
              </ProductInfo>
            </ProductCard>
          ))}
        </ProductsGrid>
      </CarouselWrapper>
      <DotWrapper>
        {Array.from({ length: totalPages }).map((_, index) => (
          <Dot key={index} active={index === currentPage} onClick={() => setCurrentPage(index)} />
        ))}
      </DotWrapper>
    </BuyOptionsContainer>
  );
};

const formatPrice = (price) => {
  return new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN', minimumFractionDigits: 2 })
    .format(price)
    .replace('$', '$ ');
};

export default BuyOptions;