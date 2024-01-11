import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './authToken';
import userDataReducer from './userData';
import productsReducer from "./products"
import brandsReducer from "./brands"

const rootReducer = combineReducers({
    auth: authReducer,
    userData: userDataReducer,
    products: productsReducer,
    brands: brandsReducer
});

export default rootReducer;