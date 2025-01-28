import { createSlice,current } from "@reduxjs/toolkit";

// Load cart items from localStorage or initialize to an empty array
const loadFromLocalStorage = () => {
  if (typeof window !== "undefined") {
    const savedItems = localStorage.getItem("cartItems");
    return savedItems ? JSON.parse(savedItems) : [];
  }
  return []; // Default value if running on the server
};

const initialState = {
  items: loadFromLocalStorage(),
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

      // Save updated state to localStorage
      localStorage.setItem("cartItems", JSON.stringify(current(state.items)));
      
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
      localStorage.setItem("cartItems", JSON.stringify(current(state.items)));
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
      localStorage.setItem("cartItems", JSON.stringify(current(state.items)));
    },

    removeAllItem: (state) => {
      state.items = [];

      // Save updated state to localStorage
      localStorage.setItem("cartItems", JSON.stringify(state.items));
    }

  }
})

export default cartSlice.reducer;
export const { addItem,removeItemQuantity,removeItem,removeAllItem } = cartSlice.actions;