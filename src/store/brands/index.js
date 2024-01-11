import { createSlice } from '@reduxjs/toolkit';

const brandsSlice = createSlice({
  name: 'brands',
  initialState: {
    brands: null,
  },
  reducers: {
    setBrands: (state, action) => {
      state.brands = action.payload;
    },
    removeBrands: (state) => {
      state.brands = null;
    },
  },
});

export const { setBrands, removeBrands } = brandsSlice.actions;

export const selectBrands = (state) => state.brands.brands;

export default brandsSlice.reducer;