import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  shippingCost: 0,
  deliveryDate:[],
  userOrder: [],
}

const deliveryDateSlice = createSlice({
  name: 'deliveryDate',
  initialState,
  reducers: {

    hydrateOrder: (state, action) => {
      state.deliveryDate = action.payload.deliveryDate;
      state.userOrder = action.payload.userOrder;
    },

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
        existingItem.shipping = 
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
          shipping: 
            selectedOption === 'option2' ? 10 : 
            selectedOption === 'option3' ? 18 : 0,
        });
      }
    
      // Recalculate shipping cost
      state.shippingCost = state.deliveryDate.reduce(
        (total, item) => total + item.shipping,
        0
      );

      // Save to localStorage
      if (typeof window !== "undefined") {
        localStorage.setItem("deliveryDate", JSON.stringify(state.deliveryDate));
      }

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
        (total, item) => total + item.shipping,
        0
      );

      // Save to localStorage
      if (typeof window !== "undefined") {
        localStorage.setItem("deliveryDate", JSON.stringify(state.deliveryDate));
      }

    },

    userOrder: (state) => {
       // Merge userOrder with deliveryDate
      const validDeliveryDate = Array.isArray(state.deliveryDate) ? state.deliveryDate : [];
      state.userOrder = [...state.userOrder, ...validDeliveryDate];

      // Save to localStorage
      if (typeof window !== "undefined") {
        localStorage.setItem("userOrder", JSON.stringify(state.userOrder));
      }
    }
    
  }
})

export default deliveryDateSlice.reducer;
export const { hydrateOrder,addDeliveryDate,removeDeliveryDate,userOrder } = deliveryDateSlice.actions;