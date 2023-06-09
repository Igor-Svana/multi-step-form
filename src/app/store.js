import { configureStore } from '@reduxjs/toolkit';
import userInfoReducer from '../features/userInfoSlice';

export const store = configureStore({
    reducer:{
        user_info: userInfoReducer,
    }
})
