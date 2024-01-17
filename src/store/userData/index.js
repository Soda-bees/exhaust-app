import { createSlice } from '@reduxjs/toolkit';
import formatToJSON from '../../services/utilities/JsonLog';

const userDataSlice = createSlice({
  name: 'userData',
  initialState: {
    userData: null,
  },
  reducers: {
    setUserData: (state, action) => {
      state.userData = action.payload;
    },
    removeUserData: (state) => {
      state.userData = null;
    },
    addToCartrRedux: (state, action) => {
      if (state.userData) {
        state.userData.cart.push(action.payload)
      }
    },
    increasPreviousQty: (state, action) => {
      if (state.userData) {
        const itemToIncrease = state.userData.cart.find(item => item.product._id === action.payload._id)
        if (itemToIncrease) {
          itemToIncrease.qty += action.payload.qty
        }
      }
    },
    deleteCartRedux: (state, action) => {
      if (state.userData) {
        // Filter out the item with the provided _id from userData.cart
        state.userData.cart = state.userData.cart.filter(item => item._id !== action.payload._id);
      }
    },
    increaseQtyByOneRedux: (state, action) => {
      if (state.userData) {
        const itemToIncrease = state.userData.cart.find(item => item._id === action.payload._id);
        if (itemToIncrease) {
          itemToIncrease.qty += 1;
        }
      }
    },
    decreaseQtyByOneRedux: (state, action) => {
      if (state.userData) {
        const itemToDecrease = state.userData.cart.find(item => item._id === action.payload._id);
        if (itemToDecrease && itemToDecrease.qty > 1) {
          itemToDecrease.qty -= 1;
        }
      }
    },
    addShippingAddressRedux: (state, action) => {
      if (state.userData) {
        state.userData.shippingAddress.push(action.payload)
      }
    },
    selectShippingAddressRedux: (state, action) => {
      const { _id } = action.payload
      state.userData.shippingAddress.forEach((address) => {
        address.selected = false;
      });

      const selectedItem = state.userData.shippingAddress.find((address) => address._id === _id);
      if (selectedItem) {
        selectedItem.selected = true;
      }

    }
  },
});

export const {
  setUserData,
  removeUserData,
  addToCartrRedux,
  increasPreviousQty,
  deleteCartRedux,
  increaseQtyByOneRedux,
  decreaseQtyByOneRedux,
  addShippingAddressRedux,
  selectShippingAddressRedux
} = userDataSlice.actions;

export const selectUserData = (state) => state.userData.userData;

export default userDataSlice.reducer;