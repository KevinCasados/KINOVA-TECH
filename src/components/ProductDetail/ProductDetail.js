import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';  
import { addToCart, fetchProducts } from '../../state/products.slice';  // Asegúrate de importar fetchProducts si es necesario cargar productos
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
  const dispatch = useDispatch(); // Usar dispatch para agregar productos al carrito
  const { products, status } = useSelector((state) => state.products);  // Extraer productos y estado

  const product = products?.find((product) => product.id === Number(productId));

  const [isZoomed, setIsZoomed] = useState(false);
  const [position, setPosition] = useState({ x: 50, y: 50 });  // Inicialmente centrado

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());  // Si los productos no están cargados, obtenerlos
    }
  }, [status, dispatch]);

  const handleImageClick = () => {
    if (isZoomed) {
      // Al desactivar el zoom, regresamos el origen de la transformación al centro
      setPosition({ x: 50, y: 50 });
    }
    setIsZoomed(!isZoomed);  // Alterna el zoom al hacer clic
  };

  const handleMouseMove = (e) => {
    if (isZoomed) {
      const { left, top, width, height } = e.target.getBoundingClientRect();
      const x = ((e.pageX - left) / width) * 100;  // Calcular la posición precisa en porcentaje
      const y = ((e.pageY - top) / height) * 100;
      setPosition({ x, y });
    }
  };

  const handleAddToCart = () => {
    if (product) {
      dispatch(addToCart(product));  // Asegurarse de despachar el producto correcto al carrito
    }
  };

  if (status === 'loading') {
    return <p>Cargando producto...</p>;  // Muestra un mensaje de carga mientras los datos se están obteniendo
  }

  if (!product) {
    return <p>Producto no encontrado!</p>;  // Maneja el caso en que no se encuentre el producto
  }

  return (
    <ProductContainer>
      <ProductImageContainer
        onMouseMove={handleMouseMove}
        onClick={handleImageClick}  // Permite alternar el zoom al hacer clic
      >
        <ProductImage 
          src={`${process.env.PUBLIC_URL}${product.image}`} 
          alt={product.name} 
          isZoomed={isZoomed} 
          position={position} 
        />
      </ProductImageContainer>
      <ProductInfo>
        <ProductSeries>Serie {product.features?.series}</ProductSeries> {/* Verifica si features está disponible */}
        <ProductTitle>{product.name}</ProductTitle>
        <ProductDescription>{product.description}</ProductDescription>
        <ProductPrice>
          {new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(product.price)}
        </ProductPrice>
        <BuyButton onClick={handleAddToCart}>ADD TO CART</BuyButton> {/* Llama a la función para agregar al carrito */}
        <ProductDetails>{product.details}</ProductDetails> {/* Verifica si details está disponible */}
      </ProductInfo>
    </ProductContainer>
  );
};

export default ProductDetailComponent;