import React from 'react';
import Header from '../../components/Header/header';
import Hero from '../../components/Hero/hero';
import NewestSection from '../../components/NewestSection/newestSection';
import Carousel from '../../components/Corrousel/carrousel';
import WhyBetterSection from '../../components/WhyBetterSection/whyBetterSection';
import BrandSlider from '../../components/BrandSlider/brandSlider';
import ShippingInfo from '../../components/ShippingInfo/shipping';
import Footer from '../../components/Footer/footer';
import BuyOptions from '../../components/BuyOptions/BuyOptions'


const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <NewestSection />
      <BuyOptions title="Most Popular Products" />
      <Carousel />
      <WhyBetterSection />
      <BrandSlider />
      <ShippingInfo />
      <BuyOptions title="recently viewed" />
      <Footer />
    </>
  );
};

export default Home;