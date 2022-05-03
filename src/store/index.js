import { createSlice, configureStore } from '@reduxjs/toolkit';
import navReducer from './nav-slice';


const store = configureStore({
    reducer: { nav: navReducer },
});

export default store;