import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';  
import { addToCart, fetchProducts } from '../../state/products.slice';  
import {
  ProductContainer,
  ProductImageContainer,
  ProductImage,
  ProductInfo,
  ProductTitle,
  ProductSeries,
  ProductPrice,
  ProductDescription,
  ProductDetails,
  BuyButton,
} from './styles';

const ProductDetailComponent = () => {
  const { productId } = useParams();
  const dispatch = useDispatch(); 
  const { products, status } = useSelector((state) => state.products);  

  const product = products?.find((product) => product.id === Number(productId));

  const [isZoomed, setIsZoomed] = useState(false);
  const [position, setPosition] = useState({ x: 50, y: 50 });  
  const [canZoom, setCanZoom] = useState(window.innerWidth > 720); // Estado para controlar si el zoom está permitido

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts()); 
    }
  }, [status, dispatch]);

  useEffect(() => {
    const handleResize = () => {
      setCanZoom(window.innerWidth > 720); // Habilitar/deshabilitar el zoom según el tamaño de la pantalla
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleImageClick = () => {
    if (canZoom) {
      if (isZoomed) {
        setPosition({ x: 50, y: 50 });
      }
      setIsZoomed(!isZoomed);
    }
  };

  const handleMouseMove = (e) => {
    if (isZoomed) {
      const { left, top, width, height } = e.target.getBoundingClientRect();
      const x = ((e.pageX - left) / width) * 100; 
      const y = ((e.pageY - top) / height) * 100;
      setPosition({ x, y });
    }
  };

  const handleAddToCart = () => {
    if (product) {
      dispatch(addToCart(product));
    }
  };

  if (status === 'loading') {
    return <p>Cargando producto...</p>;
  }

  if (!product) {
    return <p>Producto no encontrado!</p>;
  }

  return (
    <ProductContainer>
      <ProductImageContainer
        onMouseMove={handleMouseMove}
        onClick={handleImageClick}  
      >
        <ProductImage 
          src={`${process.env.PUBLIC_URL}${product.image}`} 
          alt={product.name} 
          isZoomed={isZoomed} 
          position={position} 
        />
      </ProductImageContainer>
      <ProductInfo>
        <ProductSeries>Serie {product.features?.series}</ProductSeries>
        <ProductTitle>{product.name}</ProductTitle>
        <ProductDescription>{product.description}</ProductDescription>
        <ProductPrice>
          {new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(product.price)}
        </ProductPrice>
        <BuyButton onClick={handleAddToCart}>ADD TO CART</BuyButton>
        <ProductDetails>{product.details}</ProductDetails>
      </ProductInfo>
    </ProductContainer>
  );
};

export default ProductDetailComponent;