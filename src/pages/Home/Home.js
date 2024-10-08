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
      <main>
        <Hero />
        <section aria-labelledby="newest-products">
          <h2 id="newest-products">Nuevos Productos</h2>
          <NewestSection />
        </section>
        <section aria-labelledby="buy-options-popular">
          <h2 id="buy-options-popular">Productos Más Populares</h2>
          <BuyOptions title="Most Popular Products" />
        </section>
        <Carousel />
        <WhyBetterSection />
        <BrandSlider />
        <ShippingInfo />
        <section aria-labelledby="buy-options-recently-viewed">
          <h2 id="buy-options-recently-viewed">
            <BuyOptions title="Recently Viewed" />
          </h2>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;