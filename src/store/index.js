import { configureStore } from '@reduxjs/toolkit';
import navReducer from './nav-slice';
import menuReducer from './menu-slice';


const store = configureStore({
    reducer: { nav: navReducer, menu: menuReducer },
});

export default store;