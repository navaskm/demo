import { configureStore } from "@reduxjs/toolkit";

// import cartReducer from "../components/HomePage/navbar/CartLogo/cartlogoslice";
// import cartItemsReducer from "../components/SelectedPage/ImageDisplay/AddToCartBtn/cartslice";
// import deliveryDateReducer from "../components/CheckoutPage/CartItems/cartitems";
import cartReducer from "@/app/components/HomePage/navbar/CartLogo/cartlogoslice";
import cartItemsReducer from '@/app/components/SelectedPage/ImageDisplay/AddToCartBtn/cartslice'
import deliveryDateReducer from '@/app/components/CheckoutPage/CartItems/cartitems'

const store = configureStore({
  reducer: {
    cart: cartReducer,
    cartItems: cartItemsReducer,
    deliveryDate: deliveryDateReducer,
  }
})

export default store;