import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "../HomePage/navbar/CartLogo/cartlogoslice.js";
import cartItemsReducer from "../SelectedPage/ImageDisplay/AddToCartBtn/cartslice.js";
import deliveryDateReducer from "../CheckoutPage/CartItems/cartitems.js";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    cartItems: cartItemsReducer,
    deliveryDate: deliveryDateReducer,
  }
})

export default store;