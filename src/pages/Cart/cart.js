import React from 'react';
import Header from '../../components/Header/header';
import Footer from '../../components/Footer/footer';
import HeroCartImage from '../../assets/cart-banner-v7.jpg';
import { PageContainer } from '../Products/styles';
import HeroProducts from '../../components/HeroProducts/heroProducts';
import CartContent from '../../components/CartContent/CartContent';

const Cart = () => {
  return (
    <>
      <PageContainer>
        <Header />
        <HeroProducts 
          title="CART PAGE"
          backgroundImage={HeroCartImage}
          overlayColor="rgba(0, 0, 0, 0.5)" // Cambia la opacidad o el color
        />
        <CartContent />
        <Footer />
      </PageContainer>
    </>
  );
};

export default Cart;