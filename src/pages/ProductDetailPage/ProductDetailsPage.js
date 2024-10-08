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
      <Header topBackgroundColor="#000" backgroundColor="#000" aria-label="Main navigation" />
      <main role="main" aria-label="Product details page">
        <ProductDetails aria-label="Detailed view of the selected product" />
        <BuyOptions aria-label="Recommended products based on your selection" /> {/* Asegúrate de renderizar BuyOptions */}
      </main>
      <Footer aria-label="Footer with additional navigation links and company information" />
    </>
  );
};

export default ProductDetailsPage;