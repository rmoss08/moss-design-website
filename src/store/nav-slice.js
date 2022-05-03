import { createSlice } from '@reduxjs/toolkit';

const navSlice = createSlice({
  name: 'nav',
  initialState: { isTransparent: true, isSticky: false, isLocked: false },
  reducers: {
    addTransparency(state, action) {
      state.isTransparent = true;
    },
    removeTransparency(state) {
      state.isTransparent = false;
    },
    addSticky(state) {
      state.isSticky = true;
    },
    removeSticky(state) {
      state.isSticky = false;
    },
    lock(state) {
      state.isLocked = true;
    },
    unlock(state) {
      state.isLocked = false;
    },
  },
});

export const navActions = navSlice.actions;
export default navSlice.reducer;
