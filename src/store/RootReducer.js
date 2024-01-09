import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './authToken';
import userDataReducer from './userData';

const rootReducer = combineReducers({
    auth: authReducer,
    userData: userDataReducer,
});

export default rootReducer;