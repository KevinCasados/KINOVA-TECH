import React from 'react';
import Header from '../../components/Header/header';
import Footer from '../../components/Footer/footer';
import HeroProducts from '../../components/HeroProducts/heroProducts';
import HeroProductsImage from '../../assets/all-products-banner.jpg';
import ProductsList from '../../components/ProductsList/productsList';

const Products = () => {
  return (
    <>
      <Header />
      <HeroProducts 
        title="Gaming Keyboards"
        subtitle="Speed. Precision. Durability. Kinova gaming keyboards are designed with the technology and materials required for high-performance gaming."
        backgroundImage={HeroProductsImage}
        overlayColor="rgba(0, 0, 0, 0.5)" // Cambia la opacidad o el color
      />
      <ProductsList categoryFilter="All" />
      <Footer />
    </> 
  );
};

export default Products;