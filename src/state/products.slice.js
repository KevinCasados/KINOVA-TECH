import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  const response = await axios.get(`${process.env.PUBLIC_URL}/data.json`);
  return response.data.products;
});

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    savedProducts: [],
    cart: [],  // Estado para el carrito
    status: 'idle',
    error: null
  },
  reducers: {
    addToCart: (state, action) => {
      const product = state.cart.find(item => item.id === action.payload.id);
      if (product) {
        product.quantity += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter(product => product.id !== action.payload);
    },
    addToSavedProducts: (state, action) => {
      state.savedProducts.push(action.payload);
    },
    removeFromSavedProducts: (state, action) => {
      state.savedProducts = state.savedProducts.filter(product => product.id !== action.payload);
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const product = state.cart.find(product => product.id === id);
      if (product && quantity > 0) {
        product.quantity = quantity;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export const { addToCart, removeFromCart, addToSavedProducts, removeFromSavedProducts, updateQuantity } = productsSlice.actions;
export default productsSlice.reducer;