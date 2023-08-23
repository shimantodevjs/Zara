import { configureStore } from '@reduxjs/toolkit';
import genderReducer from './genderSlice';

const store = configureStore({
  reducer: {
    gender: genderReducer,
  },
});

export default store;