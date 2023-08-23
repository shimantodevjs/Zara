import { createSlice } from '@reduxjs/toolkit';

const genderSlice = createSlice({
  name: 'gender',
  initialState: 'all',
  reducers: {
    setSelectedGender: (state, action) => {
      return action.payload;
    },
  },
});

export const { setSelectedGender } = genderSlice.actions;
export default genderSlice.reducer;