import React from 'react';
import Header from '../../components/Header/header';
import Footer from '../../components/Footer/footer';
import HeroProducts from '../../components/HeroProducts/heroProducts';
import HeroProductsImage from '../../assets/headset-banner.png';
import ProductsList from '../../components/ProductsList/productsList';
import { PageContainer } from '../Products/styles';

const Products = () => {
  return (
    <>
      <PageContainer role="main" aria-label="Gaming headsets product page">
        <Header />
        <HeroProducts 
          title="Gaming headsets"
          subtitle="Immersive sound, crystal-clear microphones, customizable EQ, and optional 7.1 surround sound. Everything you need to immerse yourself in your game and perform with the advantage of precise audio."
          backgroundImage={HeroProductsImage}
          overlayColor="rgba(0, 0, 0, 0.2)" 
        />
        <ProductsList
          categoryFilter="Headsets"
          availableFilters={['platform', 'series']}
          availableFeatureValues={{
            lighting: ['LIGHTSYNC RGB', 'Backlighting', 'Key lighting'],
            connectivity: ['Bluetooth', 'LIGHTSPEED', 'Power supply', 'With cable'],
            sensorType: ['Optical sensor', 'Sensor HERO', 'Laser sensor'],
            series: ['G', 'PRO', 'Astro']
          }}
          aria-label="Product list of gaming headsets with available filters and features"
        />
        <Footer />
      </PageContainer>
    </>
  );
};

export default Products;