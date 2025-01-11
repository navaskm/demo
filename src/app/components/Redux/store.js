import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "../HomePage/navbar/CartLogo/cartLogoSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
  }
})

export default store;