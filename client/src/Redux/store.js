// store.js
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Import storage mechanism (localStorage in this case)
import genderReducer from './genderSlice';
import cartReducer from './cartSlice';

// Redux Persist configuration
const persistConfig = {
  key: 'root', // Key for the persisted state
  storage, // Storage mechanism (localStorage)
  // Optionally, you can blacklist specific reducers or whitelist only a subset
  // blacklist: ['blacklistedReducerName'],
  // whitelist: ['whitelistedReducerName'],
};

// Combine your reducers and create the persisted reducer
const rootReducer = combineReducers({
  gender: genderReducer,
  cart: cartReducer,
});

const persistedRootReducer = persistReducer(persistConfig, rootReducer);

// Create the store with the persisted reducer
const store = configureStore({
  reducer: persistedRootReducer,
});

// Create the persistor
export const persistor = persistStore(store);

// Export the store
export default store;
