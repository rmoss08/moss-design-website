import { createSlice } from '@reduxjs/toolkit';

const navSlice = createSlice({
  name: 'nav',
  initialState: {
    isTransparencyPossible: true,
    isTransparent: true,
    isVisible: true,
    isLocked: false,
  },
  reducers: {
    changeTransparencySetting(state, action) {
      state.isTransparencyPossible = action.payload;
    },
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
    // init(state) {
    //   state.isTransparent = true;
    //   state.isVisible = true;
    //   state.isLocked = false;
    // },
  },
});

export const navActions = navSlice.actions;
export default navSlice.reducer;
