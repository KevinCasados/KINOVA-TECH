import React from 'react';
import Header from '../../components/Header/header';
import Footer from '../../components/Footer/footer';
import HeroProducts from '../../components/HeroProducts/heroProducts';
import HeroProductsImage from '../../assets/keyboard-banner.png';
import ProductsList from '../../components/ProductsList/productsList';
import { PageContainer } from '../Products/styles';

const Products = () => {
  return (
    <>
      <PageContainer role="main" aria-label="Gaming Keyboards product page">
        <Header />
        <HeroProducts 
          title="Gaming Keyboards"
          subtitle="Speed. Precision. Durability. Kinova gaming keyboards are designed with the technology and materials required for high-performance gaming."
          backgroundImage={HeroProductsImage}
          overlayColor="rgba(0, 0, 0, 0.2)" 
        />
        <ProductsList
          categoryFilter="Keyboards"
          availableFilters={['series', 'lighting', 'connectivity']}
          availableFeatureValues={{
            lighting: ['LIGHTSYNC RGB', 'Backlighting', 'Key lighting'],
            connectivity: ['With cable', 'Bluetooth', 'LIGHTSPEED', 'Power supply'],
            sensorType: ['Optical sensor', 'Sensor HERO', 'Laser sensor'],
            series: ['G', 'PRO', 'Aurora']
          }}
          aria-label="Product list of gaming keyboards with available filters and features"
        />
        <Footer />
      </PageContainer>
    </>
  );
};

export default Products;