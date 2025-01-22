import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cartItems',
  initialState,
  reducers: {

    // add item to cart with quantity 1 
    addItem: (state,action)=> {

      // Check if item already exists in the cart and increment its quantity if it does, otherwise add it to the cart.
      const existingItem = state.items.find(item => item.id === action.payload.id && item.selectedSize === action.payload.selectedSize);

      if(existingItem) {
        if(existingItem.quantity < 10){
          existingItem.quantity++;
        }
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      
    },

    // minus remove cart quantity
    removeItemQuantity: (state,action)=> {

      // Check if item already exists in the cart and increment its quantity if it does, otherwise add it to the cart.
      const existingItem = state.items.find(item => item.id === action.payload.id && item.selectedSize === action.payload.selectedSize);
      // minus remove cart quantity
      if(existingItem) {
        if(existingItem.quantity > 1){
          existingItem.quantity--;
        }
      }
    },

    // remove item from cart
    removeItem: (state,action)=> {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id && item.selectedSize === action.payload.selectedSize
      );
    
      if (itemIndex !== -1) {
        state.items.splice(itemIndex, 1);
      }
    }

  }
})

export default cartSlice.reducer;
export const { addItem,removeItemQuantity,removeItem } = cartSlice.actions;