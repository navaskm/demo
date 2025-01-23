import { createSlice } from "@reduxjs/toolkit";

// Load cartBase from localStorage or default to 0
const loadFromLocalStorage = () => {
  if (typeof window !== "undefined") {
    const savedData = localStorage.getItem("cartBase");
    return savedData ? JSON.parse(savedData) : 0;
  }
  return 0;
};

const initialState = {
  cartBase:loadFromLocalStorage(),
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state)=>{
      state.cartBase++;
      localStorage.setItem("cartBase", JSON.stringify(state.cartBase));
    },
    removeFromCart: (state)=> {
      state.cartBase--;
      localStorage.setItem("cartBase", JSON.stringify(state.cartBase));
    },
    removeFromCartOfQuantityBase: (state,action)=> {
      state.cartBase -= action.payload.quantity;
      localStorage.setItem("cartBase", JSON.stringify(state.cartBase));
    }
  }
})

export default cartSlice.reducer;
export const {addToCart,removeFromCart,removeFromCartOfQuantityBase} = cartSlice.actions;