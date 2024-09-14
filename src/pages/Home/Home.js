import React, { useEffect } from 'react';
import Header from '../../components/Header/header';
import Hero from '../../components/Hero/hero';
import NewestSection from '../../components/NewestSection/newestSection';
import Carousel from '../../components/Corrousel/carrousel';
import WhyBetterSection from '../../components/WhyBetterSection/whyBetterSection';
import BrandSlider from '../../components/BrandSlider/brandSlider';
import ShippingInfo from '../../components/ShippingInfo/shipping';
import Footer from '../../components/Footer/footer';
import BuyOptions from '../../components/BuyOptions/BuyOptions';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../state/products.slice';

const Home = () => {
  const dispatch = useDispatch();
  const productsStatus = useSelector((state) => state.products.status);

  // Cargar productos si no se han cargado
  useEffect(() => {
    if (productsStatus === 'idle') {
      dispatch(fetchProducts());
    }
  }, [dispatch, productsStatus]);

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
      <BuyOptions title="Recently Viewed" />
      <Footer />
    </>
  );
};

export default Home;