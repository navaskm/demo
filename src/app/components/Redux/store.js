import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "../HomePage/navbar/CartLogo/cartlogoslice";
import cartItemsReducer from "../SelectedPage/ImageDisplay/AddToCartBtn/cartslice";
import deliveryDateReducer from "../CheckoutPage/CartItems/cartitems";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    cartItems: cartItemsReducer,
    deliveryDate: deliveryDateReducer,
  }
})

export default store;