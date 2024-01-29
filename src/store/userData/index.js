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
      console.log("redux received");
      if (state.userData) {
        state.userData.cart.push(action.payload)
        console.log("redux push");
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
    },
    deleteAddressRedux: (state, action) => {
      if (state.userData) {
        state.userData.shippingAddress = state.userData.shippingAddress.filter(item => item._id !== action.payload._id);
      }
    },
    updateAddressRedux: (state, action) => {
      const updatedAddress = action.payload;

      if (state.userData) {
        // Find the index of the address with the matching _id
        const index = state.userData.shippingAddress.findIndex((address) => address._id === updatedAddress._id);

        // If the address is found, update it
        if (index !== -1) {
          state.userData.shippingAddress[index] = updatedAddress;
        }
      }
    },
    addCardRedux: (state, action) => {
      if (state.userData) {
        state.userData.cards.push(action.payload)
      }
    },
    selectCardRedux: (state, action) => {
      const { _id } = action.payload
      state.userData.cards.forEach((address) => {
        address.selected = false;
      });

      const selectedItem = state.userData.cards.find((address) => address._id === _id);
      if (selectedItem) {
        selectedItem.selected = true;
      }
    },
    deleteCardRedux: (state, action) => {
      if (state.userData) {
        state.userData.cards = state.userData.cards.filter(item => item._id !== action.payload._id);
      }
    },
    updateCardRedux: (state, action) => {
      const updatedCard = action.payload;

      if (state.userData) {
        const index = state.userData.cards.findIndex((address) => address._id === updatedCard._id);

        if (index !== -1) {
          state.userData.cards[index] = updatedCard;
        }
      }
    },
    addNewOrderRedux: (state, action) => {
      if (state.userData) {
        state.userData.orders.push(action.payload)
      }
    },
    removeOrderRedux: (state) => {
      state.userData.orders = []
    },
    emptyCartRedux: (state) => {
      state.userData.cart = []
    },
    updateProfileDataRedux: (state, action) => {
      if (state.userData) {
        const { name, location, profile, countryCode, number } = action.payload;
        if (name !== undefined) {
          state.userData.name = name;
        }
        if (location !== undefined) {
          state.userData.location = location;
        }
        if (profile !== undefined) {
          state.userData.profile = profile;
        }
        if (countryCode !== undefined) {
          state.userData.countryCode = countryCode;
        }
        if (number !== undefined) {
          state.userData.number = number;
        }
      }
    },
    updateOrdersRedux: (state , action) => {
      state.userData.orders = action.payload
    },
    deleteOrderRedux: (state, action) => {
      if (state.userData) {
        state.userData.orders = state.userData.orders.filter(item => item._id !== action.payload._id);
      }
    },
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
  selectShippingAddressRedux,
  deleteAddressRedux,
  updateAddressRedux,
  addCardRedux,
  selectCardRedux,
  deleteCardRedux,
  updateCardRedux,
  addNewOrderRedux,
  removeOrderRedux,
  emptyCartRedux,
  updateProfileDataRedux,
  updateOrdersRedux,
  deleteOrderRedux
} = userDataSlice.actions;

export const selectUserData = (state) => state.userData.userData;

export default userDataSlice.reducer;