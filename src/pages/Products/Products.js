import React from 'react';
import Header from '../../components/Header/header';
import Footer from '../../components/Footer/footer';
import HeroProducts from '../../components/HeroProducts/heroProducts';
import HeroProductsImage from '../../assets/all-products-banner.jpg';
import ProductsList from '../../components/ProductsList/productsList';
import { PageContainer } from './styles';


const Products = () => {
  return (
    <>
      <PageContainer>
        <Header />
        <HeroProducts 
          title="ALL PRODUCTS"
          subtitle="Variety. Innovation. Quality. Kinova products are designed to meet the highest standards of performance and durability. Explore our full range of cutting-edge technology and find the perfect solution for your needs"
          backgroundImage={HeroProductsImage}
          overlayColor="rgba(0, 0, 0, 0.5)" // Cambia la opacidad o el color
        />
        <ProductsList
        categoryFilter="All"
        availableFilters={['platform', 'series', 'feeding', 'lighting', 'connectivity', 'sensorType']}
        availableFeatureValues={{
          lighting: ['LIGHTSYNC RGB', 'Backlighting', 'Key lighting'],
          connectivity: ['Bluetooth', 'LIGHTSPEED', 'Power supply', 'With cable', ],
          sensorType: ['Optical sensor', 'Sensor HERO', 'Laser sensor'],
          series: ['PRO', 'G', 'Astro', 'Aurora']
          }}
        />
        <Footer />
      </PageContainer>
    </> 
  );
};

export default Products;