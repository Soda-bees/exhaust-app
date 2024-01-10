import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './authToken';
import userDataReducer from './userData';
import productsReducer from "./products"

const rootReducer = combineReducers({
    auth: authReducer,
    userData: userDataReducer,
    products:productsReducer
});

export default rootReducer;