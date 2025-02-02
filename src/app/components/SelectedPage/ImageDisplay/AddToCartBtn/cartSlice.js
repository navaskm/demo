import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  items:[],
};

const cartSlice = createSlice({
  name: 'cartItems',
  initialState,
  reducers: {

    cartItemHydrate: (state, action) => {
      state.items = action.payload.items;
    },


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

      // Save updated state to localStorage
      if (typeof window !== "undefined") {
        localStorage.setItem("cartItems", JSON.stringify(state.items));
      }
      
    },

    // minus remove cart quantity
    removeItemQuantity: (state,action)=> {

      // Check if item already exists in the cart and increment its quantity if it does, otherwise add it to the cart.
      const existingItem = state.items.find(item => item.id === action.payload.id && item.selectedSize === action.payload.selectedSize);
      // minus remove cart quantity
      if(existingItem && existingItem.quantity > 1) {
        existingItem.quantity--;
      }

      // Save updated state to localStorage
      if (typeof window !== "undefined") {
        localStorage.setItem("cartItems", JSON.stringify(state.items));
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

      // Save updated state to localStorage
      if (typeof window !== "undefined") {
        localStorage.setItem("cartItems", JSON.stringify(state.items));
      }
    },

    removeAllItem: (state) => {
      state.items = [];

      // Save updated state to localStorage
      if (typeof window !== "undefined") {
        localStorage.setItem("cartItems", JSON.stringify(state.items));
      }
    }

  }
})

export default cartSlice.reducer;
export const { cartItemHydrate,addItem,removeItemQuantity,removeItem,removeAllItem } = cartSlice.actions;