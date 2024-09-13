import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom'; // Cambiado a HashRouter
import Home from '../pages/Home/Home';
import Products from '../pages/Products/Products';
import Login from '../pages/Login/Login';
import 'normalize.css';
import GlobalStyle from './styles';
import Mouse from '../pages/Mouse/mouse';
import Keyboards from '../pages/Keyboards/keyboards';
import Headphones from '../pages/Headphones/headphones';
import Cart from '../pages/Cart/cart';
import Saved from '../pages/SavedProducts/SavedProductsPage';
import ProductDetailsPage from '../pages/ProductDetailPage/ProductDetailsPage'; 
import ScrollToTop from '../components/ScrollToTop/ScrollToTop';

const App = () => {
  return (
    <Router> {/* HashRouter en lugar de BrowserRouter */}
      <ScrollToTop />
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/mouses" element={<Mouse />} />
        <Route path="/products/keyboards" element={<Keyboards />} />
        <Route path="/products/headphones" element={<Headphones />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/savedproducts" element={<Saved />} />
        <Route path="/products/:productId" element={<ProductDetailsPage />} />
      </Routes>
    </Router>
  );
};

export default App;