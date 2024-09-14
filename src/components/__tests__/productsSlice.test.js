import reducer, {
    addToCart,
    removeFromCart,
    addToSavedProducts,
    removeFromSavedProducts,
    updateQuantity,
    fetchProducts,
  } from '../../state/products.slice.js';
  import axios from 'axios';
  import MockAdapter from 'axios-mock-adapter';
  import { configureStore } from '@reduxjs/toolkit';
  
  // Configurar un mock para axios
  const mock = new MockAdapter(axios);
  
  // Estado inicial simulado
  const initialState = {
    products: [],
    savedProducts: [],
    cart: [],
    status: 'idle',
    error: null,
  };
  
  describe('products.slice tests', () => {
    
    // Reducer tests
    describe('Reducers', () => {
      
      // Test para addToCart
      test('should add a product to the cart', () => {
        const product = { id: 1, name: 'Mouse', price: 100 };
        const state = reducer(initialState, addToCart(product));
        expect(state.cart).toEqual([{ ...product, quantity: 1 }]);
      });
  
      // Test para removeFromCart
      test('should remove a product from the cart', () => {
        const stateWithCart = {
          ...initialState,
          cart: [{ id: 1, name: 'Mouse', price: 100, quantity: 1 }],
        };
        const state = reducer(stateWithCart, removeFromCart(1));
        expect(state.cart).toEqual([]);
      });
  
      // Test para addToSavedProducts
      test('should add a product to savedProducts', () => {
        const product = { id: 1, name: 'Keyboard' };
        const state = reducer(initialState, addToSavedProducts(product));
        expect(state.savedProducts).toEqual([product]);
      });
  
      // Test para removeFromSavedProducts
      test('should remove a product from savedProducts', () => {
        const stateWithSaved = {
          ...initialState,
          savedProducts: [{ id: 1, name: 'Keyboard' }],
        };
        const state = reducer(stateWithSaved, removeFromSavedProducts(1));
        expect(state.savedProducts).toEqual([]);
      });
  
      // Test para updateQuantity
      test('should update the quantity of a product in the cart', () => {
        const stateWithCart = {
          ...initialState,
          cart: [{ id: 1, name: 'Mouse', price: 100, quantity: 1 }],
        };
        const state = reducer(stateWithCart, updateQuantity({ id: 1, quantity: 5 }));
        expect(state.cart[0].quantity).toEqual(5);
      });
  
    });
  
    // Thunks tests
    describe('Thunks', () => {
      
      // Configuración de un mock store para thunks
      const store = configureStore({ reducer });
  
      afterEach(() => {
        mock.reset(); // Resetea el mock después de cada test
      });
  
      // Test para fetchProducts
      test('should fetch products successfully', async () => {
        const mockProducts = [
          { id: 1, name: 'Mouse', price: 100 },
          { id: 2, name: 'Keyboard', price: 200 },
        ];
  
        // Simular la respuesta de la API
        mock.onGet(`${process.env.PUBLIC_URL}/data.json`).reply(200, {
          products: mockProducts,
        });
  
        await store.dispatch(fetchProducts());
        const state = store.getState().products;
  
        expect(state.status).toEqual('succeeded');
        expect(state.products).toEqual(mockProducts);
      });
  
      // Test para manejo de error en fetchProducts
      test('should handle error when fetching products', async () => {
        // Simular un error en la respuesta de la API
        mock.onGet(`${process.env.PUBLIC_URL}/data.json`).reply(500);
  
        await store.dispatch(fetchProducts());
        const state = store.getState().products;
  
        expect(state.status).toEqual('failed');
        expect(state.error).not.toBeNull();
      });
  
    });
  });