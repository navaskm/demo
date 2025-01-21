import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "../HomePage/navbar/CartLogo/cartLogoSlice";
import cartItemsReducer from "../SelectedPage/ImageDisplay/AddToCartBtn/cartSlice";
import deliveryDateReducer from "../CheckoutPage/CartItems/cartItems";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    cartItems: cartItemsReducer,
    deliveryDate: deliveryDateReducer,
  }
})

export default store;