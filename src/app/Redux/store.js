import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "../components/HomePage/navbar/CartLogo/cartlogoslice.js";
import cartItemsReducer from "../components/SelectedPage/ImageDisplay/AddToCartBtn/cartslice.js";
import deliveryDateReducer from "../components/CheckoutPage/CartItems/cartitems.js";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    cartItems: cartItemsReducer,
    deliveryDate: deliveryDateReducer,
  }
})

export default store;