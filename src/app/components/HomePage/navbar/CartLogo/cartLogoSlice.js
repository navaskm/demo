import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartBase: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state)=>{
      state.cartBase++;
    },
    removeFromCart: (state)=> {
      state.cartBase--;
    },
    removeFromCartOfQuantityBase: (state,action)=> {
      state.cartBase -= action.payload.quantity;
    }
  }
})

export default cartSlice.reducer;
export const {addToCart,removeFromCart,removeFromCartOfQuantityBase} = cartSlice.actions;