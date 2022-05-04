import { createSlice } from '@reduxjs/toolkit';

const menuSlice = createSlice({
  name: 'menu',
  initialState: { isVisible: false },
  reducers: {
    hideMenu(state) {
      state.isVisible = false;
    },
    toggleMenu(state) {
      state.isVisible = !state.isVisible;
    },
  },
});

export const menuActions = menuSlice.actions;
export default menuSlice.reducer;
