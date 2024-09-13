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
      <PageContainer>
        <Header />
        <HeroProducts 
          title="SAVED PRODUCTS PAGE"
          backgroundImage={HeroProductsImage}
          overlayColor="rgba(0, 0, 0, 0.5)" // Cambia la opacidad o el color
        />
        <SavedProductsContent />
        <Footer />
      </PageContainer>
    </>
  );
};

export default SavedProductsPage;