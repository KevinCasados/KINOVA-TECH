import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from '../../state/products.slice';
import EmpyCartImg from '../../assets/empty-cart-removebg.png';
import { 
  CartContainer, 
  CartItem, 
  CartItemsContainer,  
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
import { CgClose } from 'react-icons/cg';

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
      <CartContainer role="region" aria-label="Shopping Cart Items">
        {cart.length > 0 ? (
          <>
            <CartItemsContainer role="list">
              {cart.map((product) => (
                <CartItem key={product.id} role="listitem" aria-label={`Product: ${product.name}`}>
                  <CartImage 
                    src={`${process.env.PUBLIC_URL}${product.image}`} 
                    alt={product.name} 
                  />
                  <CartDetails>
                    <h4>{product.name}</h4>
                    <p>{product.category}</p>
                    <p>{formatPrice(product.price)}</p>
                    <label htmlFor={`quantity-${product.id}`}>Quantity:</label>
                    <CartQuantity 
                      id={`quantity-${product.id}`} 
                      type="number" 
                      value={product.quantity} 
                      min="1" 
                      aria-label={`Quantity of ${product.name}`} 
                      onChange={(e) => handleQuantityChange(product.id, Number(e.target.value))} 
                    />
                  </CartDetails>
                  <RemoveButton 
                    aria-label={`Remove ${product.name} from cart`} 
                    onClick={() => handleRemove(product.id)}
                  >
                    <CgClose />
                  </RemoveButton>
                </CartItem>
              ))}
            </CartItemsContainer>
            <CartTotals role="contentinfo" aria-label="Cart totals">
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
              <ProceedButton aria-label="Proceed to Checkout">Proceed to Checkout</ProceedButton>
            </CartTotals>
          </>
        ) : (
          <EmptyStateContainer role="region" aria-label="Empty Cart">
            <EmptyImage src={EmpyCartImg} alt="Empty cart" width={250} />
            <EmptyMessage>Your cart is currently empty!</EmptyMessage>
            <p>
              You haven't added any products to your cart yet. Explore our catalog and add products you like.
            </p>
            <Link to="/products">
              <ReturnButton aria-label="Return to Shop">Return to Shop</ReturnButton>
            </Link>
          </EmptyStateContainer>
        )}
      </CartContainer>
    </>
  );
};

export default CartContent;