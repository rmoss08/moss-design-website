import { createSlice } from '@reduxjs/toolkit';

const navSlice = createSlice({
  name: 'nav',
  initialState: {
    isTransparent: true,
    isVisible: true,
    isLocked: false,
  },
  reducers: {
    addTransparency(state, action) {
      state.isTransparent = true;
    },
    removeTransparency(state) {
      state.isTransparent = false;
    },
    showNav(state) {
      state.isVisible = true;
    },
    hideNav(state) {
      state.isVisible = false;
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
