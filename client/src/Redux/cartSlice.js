import { createSlice } from '@reduxjs/toolkit';


export const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addItemToCart: (state, action) => {
      const newItem = action.payload;
      const item = state.find(item => item.id === newItem.id);

      if(item){
        item.quantity=+newItem.quantity
      }else{
        state.push(newItem)
      }

      
    },
    removeItemFromCart: (state, action) => {
      const itemIdToRemove = action.payload;
      return state.filter(item => item.id !== itemIdToRemove);
    },
    resetCart: (state) => {
      return [];
    },
  },
});

export const { addItemToCart, removeItemFromCart , resetCart} = cartSlice.actions;
export default cartSlice.reducer;