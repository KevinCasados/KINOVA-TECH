import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchProducts } from '../../state/products.slice'; // Importamos la acción
import ProductDetails from '../../components/ProductDetail/ProductDetail';
import Header from '../../components/Header/header';
import Footer from '../../components/Footer/footer';
import BuyOptions from '../../components/BuyOptions/BuyOptions';

const ProductDetailsPage = () => {
  const dispatch = useDispatch();

  // Ejecutar la acción para obtener los productos al cargar la página
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
      <Header topBackgroundColor="#000" backgroundColor="#000" />
      <ProductDetails />
      <BuyOptions /> {/* Asegúrate de renderizar BuyOptions */}
      <Footer />
    </>
  );
};

export default ProductDetailsPage;