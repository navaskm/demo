import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "../HomePage/navbar/CartLogo/cartLogoSlice";
import cartItemsReducer from "../SelectedPage/ImageDisplay/AddToCartBtn/cartSlice"

const store = configureStore({
  reducer: {
    cart: cartReducer,
    cartItems: cartItemsReducer,
  }
})

export default store;