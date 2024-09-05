import React from 'react';
import Header from '../../components/Header/header';
import Hero from '../../components/Hero/hero';
import NewestSection from '../../components/NewestSection/newestSection';
import Carousel from '../../components/Corrousel/carrousel';
import WhyBetterSection from '../../components/WhyBetterSection/whyBetterSection';
import BrandSlider from '../../components/BrandSlider/brandSlider';
import ShippingInfo from '../../components/ShippingInfo/shipping';
import Footer from '../../components/Footer/footer';


const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <NewestSection />
      <Carousel />
      <WhyBetterSection />
      <BrandSlider />
      <ShippingInfo />
      <Footer />
    </>
  );
};

export default Home;