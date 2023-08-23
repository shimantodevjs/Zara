// genderSlice.js
import { createSlice } from '@reduxjs/toolkit';

const getInitialGender = () => {
  const storedGender = localStorage.getItem('selectedGender');
  return storedGender || 'all';
};

const genderSlice = createSlice({
  name: 'gender',
  initialState: getInitialGender(),
  reducers: {
    setSelectedGender: (state, action) => {
      localStorage.setItem('selectedGender', action.payload);
      return action.payload;
    },
  },
});

export const { setSelectedGender } = genderSlice.actions;
export default genderSlice.reducer;
