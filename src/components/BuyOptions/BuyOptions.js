import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  ProductCard,
  ProductImage,
  ProductInfo,
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
  ProductPriceOptions,
  ProductImageWrapperOptions
} from './styles';

const BuyOptions = ({ title = "You May Also Like" }) => {
  const products = useSelector((state) => state.products.products);
  const [randomizedProducts, setRandomizedProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3; 
  const maxPages = 3; 
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  useEffect(() => {
    if (products && products.length > 0) {
      const shuffledProducts = [...products].sort(() => 0.5 - Math.random());
      setRandomizedProducts(shuffledProducts);
    }
  }, [products]);

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
      handleNextPage(); 
    }
    if (touchStartX.current - touchEndX.current < -50) {
      handlePreviousPage();
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
    <BuyOptionsContainer aria-label="Product Suggestions" role="region">
      <Title>{title}</Title>
      <CarouselWrapper
        onTouchStart={isTouchDevice ? handleTouchStart : null}
        onTouchMove={isTouchDevice ? handleTouchMove : null}
        onTouchEnd={isTouchDevice ? handleTouchEnd : null}
      >
        {window.innerWidth > 1875 && (
          <>
            <ArrowLeft 
              onClick={handlePreviousPage} 
              role="button" 
              aria-label="Previous Products"
            >
              {'<'}
            </ArrowLeft>
            <ArrowRight 
              onClick={handleNextPage} 
              role="button" 
              aria-label="Next Products"
            >
              {'>'}
            </ArrowRight>
          </>
        )}
        <ProductsGrid>
          {paginatedProducts.map((product) => (
            <ProductCard key={product.id} role="listitem">
              <ProductImageWrapperOptions>
                <Link to={`/products/${product.id}`} aria-label={`View details for ${product.name}`}>
                  <ProductImage 
                    src={`${process.env.PUBLIC_URL}${product.image}`} 
                    alt={product.name} 
                  />
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
      <DotWrapper aria-label="Pagination Dots">
        {Array.from({ length: totalPages }).map((_, index) => (
          <Dot 
            key={index} 
            active={index === currentPage} 
            onClick={() => setCurrentPage(index)} 
            role="button" 
            aria-label={`Go to page ${index + 1}`}
          />
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