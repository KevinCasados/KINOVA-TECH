import React, { useEffect, useState } from 'react';
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

const BuyOptions = () => {
  const products = useSelector((state) => state.products.products); // Seleccionamos los productos
  const [randomizedProducts, setRandomizedProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3; // Mostramos 3 productos por página

  useEffect(() => {
    if (products && products.length > 0) {
      // Aleatorizamos los productos
      const shuffledProducts = [...products].sort(() => 0.5 - Math.random());
      setRandomizedProducts(shuffledProducts);
    }
  }, [products]);

  const totalPages = Math.ceil(randomizedProducts.length / itemsPerPage);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => (prevPage - 1 + totalPages) % totalPages);
  };

  // Obtener los productos para la página actual
  const paginatedProducts = randomizedProducts.slice(
    currentPage * itemsPerPage,
    currentPage * itemsPerPage + itemsPerPage
  );

  return (
    <BuyOptionsContainer>
      <Title>You May Also Like</Title>
      <CarouselWrapper>
        <ArrowLeft onClick={handlePreviousPage}>{'<'}</ArrowLeft>
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
        <ArrowRight onClick={handleNextPage}>{'>'}</ArrowRight>
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