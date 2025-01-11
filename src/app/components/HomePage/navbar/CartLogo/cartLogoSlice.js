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
    }
  }
})

export default cartSlice.reducer;
export const {addToCart} = cartSlice.actions;