import React from 'react';
import Header from '../../components/Header/header';
import Footer from '../../components/Footer/footer';
import SavedProductsContent from '../../components/SavedProductsContent/SavedProductsContent';
import HeroProductsImage from '../../assets/banner-saved-products-v3.jpg';
import { PageContainer } from '../Products/styles';
import HeroProducts from '../../components/HeroProducts/heroProducts';

const SavedProductsPage = () => {
  return (
    <>
      <PageContainer role="main" aria-label="Saved Products page">
        <Header />
        <HeroProducts 
          title="SAVED PRODUCTS"
          backgroundImage={HeroProductsImage}
          overlayColor="rgba(0, 0, 0, 0.5)" 
          aria-label="Banner showing saved products"
        />
        <SavedProductsContent aria-label="List of saved products" />
        <Footer />
      </PageContainer>
    </>
  );
};

export default SavedProductsPage;