import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cartItems',
  initialState,
  reducers: {
    addItem: (state,action)=> {

      // Check if item already exists in the cart and increment its quantity if it does, otherwise add it to the cart.
      const existingItem = state.items.find(item => item.id === action.payload.id);

      // Otherwise add it to the cart
      if(existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      
    }
  }
})

export default cartSlice.reducer;
export const { addItem } = cartSlice.actions;