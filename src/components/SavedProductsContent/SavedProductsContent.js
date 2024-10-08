import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import EmpySavedProductsImg from '../../assets/empty-saved-products-nobackground.png';
import { removeFromSavedProducts, addToCart } from '../../state/products.slice';
import { 
  ProductsContainer,
  ProductsGrid, 
  ProductCard, 
  ProductImage, 
  ProductInfo, 
  ProductPrice, 
  AddToCartButton, 
  ProductImageWrapper, 
  IconsWrapper 
} from '../ProductsList/styles.js'; // Importamos los styled-components ya creados
import { FaHeart } from 'react-icons/fa';
import {
  TitleContainer,
  TitleText,
  Line,
  EmptyStateContainer,
  EmptyImage,
  EmptyMessage,
  ReturnButton
} from './styles'; // Los nuevos estilos que vamos a crear

const SavedProductsContent = () => {
  const dispatch = useDispatch();
  const savedProducts = useSelector((state) => state.products.savedProducts);

  const handleRemoveFromSaved = (productId) => {
    dispatch(removeFromSavedProducts(productId));
  };

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN', minimumFractionDigits: 2 })
      .format(price)
      .replace('$', '$ ');
  };

  return (
    <>
      <TitleContainer>
        <TitleText><span>YOUR</span> SAVED PRODUCTS</TitleText>
        <Line />
      </TitleContainer>

      {savedProducts.length === 0 ? (
        <EmptyStateContainer role="region" aria-label="No saved products">
          <EmptyImage src={EmpySavedProductsImg} alt="Empty saved products illustration" />
          <EmptyMessage>Your Saved Products list is currently empty!</EmptyMessage>
          <p>
            You haven't saved any products yet. Explore our catalog and save products you like for later.
          </p>
          <Link to="/products">
            <ReturnButton aria-label="Return to the shop">Return to Shop</ReturnButton>
          </Link>
        </EmptyStateContainer>
      ) : (
        <ProductsContainer role="region" aria-label="List of saved products">
          <ProductsGrid>
            {savedProducts.map((product) => (
              <ProductCard key={product.id}>
                <ProductImageWrapper>
                  <Link to={`/products/${product.id}`} aria-label={`View details of ${product.name}`}>
                    <ProductImage src={`${process.env.PUBLIC_URL}${product.image}`} alt={product.name} />
                  </Link>
                  <IconsWrapper>
                    <div 
                      onClick={() => handleRemoveFromSaved(product.id)} 
                      style={{ cursor: 'pointer' }} 
                      aria-label={`Remove ${product.name} from saved products`}
                    >
                      <FaHeart size={24} color="#009AFC" />
                    </div>
                  </IconsWrapper>
                </ProductImageWrapper>
                <ProductInfo>
                  <h2>{product.name}</h2>
                  <ProductPrice>{formatPrice(product.price)}</ProductPrice>
                  <AddToCartButton 
                    onClick={() => handleAddToCart(product)} 
                    aria-label={`Add ${product.name} to cart`}
                  >
                    ADD TO CART
                  </AddToCartButton>
                </ProductInfo>
              </ProductCard>
            ))}
          </ProductsGrid>
        </ProductsContainer>
      )}
    </>
  );
};

export default SavedProductsContent;

export {
  EmptyStateContainer,
  EmptyImage,
  EmptyMessage,
  ReturnButton,
};