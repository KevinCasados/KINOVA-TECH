import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from '../../state/products.slice';
import EmpyCartImg from '../../assets/empty-cart-removebg.png';
import { FaRegTrashAlt, FaTrash } from 'react-icons/fa';
import { 
  CartContainer, 
  CartItem, 
  CartItemsContainer,  // Importa el nuevo contenedor
  CartImage, 
  CartDetails, 
  CartQuantity, 
  RemoveButton, 
  CartTotals, 
  ProceedButton, 
  TitleContainer,
  TitleText,
  PriceText,
  TotalPriceText,
  Line,
  CartTotalTitleContainer,
  CartTotalTitleText,
  CartTotalLine
} from './styles';
import { EmptyImage, EmptyMessage, EmptyStateContainer, ReturnButton } from '../SavedProductsContent/styles';
import { Link } from 'react-router-dom';
import { IoClose, IoTrashBinOutline } from 'react-icons/io5';
import { CgClose, CgCloseO } from 'react-icons/cg';

const formatPrice = (price) => {
  return new Intl.NumberFormat('es-MX', {
    style: 'currency',
    currency: 'MXN',
    minimumFractionDigits: 2
  }).format(price).replace('$', '$ ');
};

const CartContent = () => {
  const cart = useSelector((state) => state.products.cart);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleQuantityChange = (id, quantity) => {
    if (quantity > 0) {
      dispatch(updateQuantity({ id, quantity }));
    }
  };

  const calculateSubtotal = () => {
    return cart.reduce((total, product) => total + product.price * product.quantity, 0);
  };

  const shippingFee = calculateSubtotal() > 1000 ? 'Free Shipping' : 10;
  const total = calculateSubtotal() + (shippingFee === 'Free Shipping' ? 0 : shippingFee);

  return (
    <>
      <TitleContainer>
        <TitleText><span>YOUR</span> CART</TitleText>
        <Line />
      </TitleContainer>
      <CartContainer>
        {cart.length > 0 ? (
          <>
            <CartItemsContainer>
              {cart.map((product) => (
                <CartItem key={product.id}>
                  <CartImage 
                    src={`${process.env.PUBLIC_URL}${product.image}`} 
                    alt={product.name} 
                  />
                  <CartDetails>
                    <h4>{product.name}</h4>
                    <p>{product.category}</p>
                    <p>{formatPrice(product.price)}</p>
                    <CartQuantity 
                      type="number" 
                      value={product.quantity} 
                      min="1" 
                      onChange={(e) => handleQuantityChange(product.id, Number(e.target.value))} 
                    />
                  </CartDetails>
                  <RemoveButton onClick={() => handleRemove(product.id)}>
                    <CgClose />
                  </RemoveButton>
                </CartItem>
              ))}
            </CartItemsContainer>
            <CartTotals>
              <CartTotalTitleContainer>
                <CartTotalTitleText><span>CART</span> TOTALS</CartTotalTitleText>
                <CartTotalLine />
              </CartTotalTitleContainer>
              <p>
                <span>Subtotal:</span> 
                <PriceText>{formatPrice(calculateSubtotal())}</PriceText>
              </p>
              <p>
                <span>Shipping Fee:</span> 
                <PriceText>{shippingFee === 'Free Shipping' ? shippingFee : formatPrice(shippingFee)}</PriceText>
              </p>
              <p>
                <TotalPriceText>Total:</TotalPriceText>
                <TotalPriceText>{formatPrice(total)}</TotalPriceText>
              </p>
              <ProceedButton>Proceed to Checkout</ProceedButton>
            </CartTotals>
          </>
        ) : (
          <EmptyStateContainer>
            <EmptyImage src={EmpyCartImg} alt="Empty saved products" width={250} />
            <EmptyMessage>Your cart is currently empty!</EmptyMessage>
            <p>
              You haven't added any products to your cart yet. Explore our catalog and add products you like.
            </p>
            <Link to="/products">
              <ReturnButton>Return to Shop</ReturnButton>
            </Link>
          </EmptyStateContainer>
        )}
      </CartContainer>
    </>
  );
};

export default CartContent;