import { createSlice } from "@reduxjs/toolkit";

// Helper function to load state from localStorage
const loadFromLocalStorage = () => {
  if (typeof window !== "undefined") {
    const savedData = localStorage.getItem("deliveryDate");
    return savedData ? JSON.parse(savedData) : [];
  }
  return [];
};

const loadUserOrderFromLocalStorage = () => {
  if(typeof window !== 'undefined'){
    const savedData = localStorage.getItem("userOrder");
    return savedData ? JSON.parse(savedData): [];
  }
  return [];
}

const initialState = {
  shippingCost: 0,
  deliveryDate:loadFromLocalStorage(),
  userOrder: loadUserOrderFromLocalStorage(),
}

const deliveryDateSlice = createSlice({
  name: 'deliveryDate',
  initialState,
  reducers: {
    // add shipping cost
    addDeliveryDate: (state, action) => {
      const { id, selectedOption, conformDate, name, image, price, quantity, size } = action.payload;
    
      const existingItem = state.deliveryDate.find((item) => item.id === id);
      if (existingItem) {

        existingItem.selectedOption = selectedOption;
        existingItem.conformDate = conformDate;
        existingItem.name = name;
        existingItem.image = image;
        existingItem.price = price;
        existingItem.quantity = quantity;
        existingItem.size = size;
        existingItem.shippingConst = 
          selectedOption === 'option2' ? 10 : 
          selectedOption === 'option3' ? 18 : 0;

      } else {
        // Add a new item only if it doesn't exist
        state.deliveryDate.push({
          id,
          selectedOption,
          name,
          image,
          price,
          quantity,
          conformDate,
          size,
          shippingConst: 
            selectedOption === 'option2' ? 10 : 
            selectedOption === 'option3' ? 18 : 0,
        });
      }
    
      // Recalculate shipping cost
      state.shippingCost = state.deliveryDate.reduce(
        (total, item) => total + item.shippingConst,
        0
      );

      // Save to localStorage
      localStorage.setItem("deliveryDate", JSON.stringify(state.deliveryDate));

    },

    // remove shipping cost
    removeDeliveryDate: (state, action) => {

      const { productId } = action.payload;

      const index = state.deliveryDate.findIndex((item) => item.id === productId);
      
      if (index !== -1) {
        state.deliveryDate.splice(index, 1); // Remove the item
      }

      // Recalculate shippingCost
      state.shippingCost = state.deliveryDate.reduce(
        (total, item) => total + item.shippingConst,
        0
      );

      // Save to localStorage
      localStorage.setItem("deliveryDate", JSON.stringify(state.deliveryDate));

    },

    userOrder: (state) => {
       // Merge userOrder with deliveryDate
      const validDeliveryDate = Array.isArray(state.deliveryDate) ? state.deliveryDate : [];
      state.userOrder = [...state.userOrder, ...validDeliveryDate];

      // Save to localStorage
      localStorage.setItem("userOrder", JSON.stringify(state.userOrder));
    }
    
  }
})

export default deliveryDateSlice.reducer;
export const { addDeliveryDate,removeDeliveryDate,userOrder } = deliveryDateSlice.actions;