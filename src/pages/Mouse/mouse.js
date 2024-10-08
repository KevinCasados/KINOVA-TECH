import React from 'react';
import Header from '../../components/Header/header';
import Footer from '../../components/Footer/footer';
import HeroProducts from '../../components/HeroProducts/heroProducts';
import HeroProductsImage from '../../assets/mouse-gamer-banner.png';
import ProductsList from '../../components/ProductsList/productsList';
import { PageContainer } from '../Products/styles';

const Products = () => {
  return (
    <>
      <PageContainer role="main" aria-label="Gaming Mouse product page">
        <Header />
        <HeroProducts 
          title="Gaming Mouse"
          subtitle="Kinova develops award-winning wireless and wired gaming mice. And it never stops innovating everything from sensors to shapes to give you what's right for you."
          backgroundImage={HeroProductsImage}
          overlayColor="rgba(0, 0, 0, 0.2)" 
        />
        <ProductsList
          categoryFilter="Gaming Mouse"
          availableFilters={['feeding', 'lighting', 'connectivity', 'sensorType']}
          availableFeatureValues={{
            lighting: ['LIGHTSYNC RGB'],
            connectivity: ['Bluetooth', 'LIGHTSPEED', 'With cable'],
            sensorType: ['Optical sensor', 'Sensor HERO', 'Laser sensor'],
            series: ['PRO', 'G', 'Astro', 'Aurora'],
            feeding: ['With cable', 'Rechargeable', 'Powerplay', 'Alkaline battery']
          }}
          aria-label="Product list of gaming mice with available filters and features"
        />
        <Footer />
      </PageContainer>
    </>
  );
};

export default Products;