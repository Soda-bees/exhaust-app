import { createSlice } from '@reduxjs/toolkit';

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    products: null,
  },
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    removeProducts: (state) => {
      state.products = null;
    },
  },
});

export const { setProducts, removeProducts } = productsSlice.actions;

export const selectProducts = (state) => state.products.products;

export default productsSlice.reducer;