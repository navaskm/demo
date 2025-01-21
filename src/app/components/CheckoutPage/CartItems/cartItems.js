import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  shippingCost: 0,
}

const deliveryDate=[];

const deliveryDateSlice = createSlice({
  name: 'deliveryDate',
  initialState,
  reducers: {
    addDeliveryDate: (state, action)=> {

      const existingItem = deliveryDate.find(deliveryDate => deliveryDate.id === action.payload.id);
      if(existingItem){

        if(action.payload.selectedOption === 'option2'){
          existingItem.shippingConst = 10
        }else if (action.payload.selectedOption === 'option3'){
          existingItem.shippingConst = 18
        }else{
          existingItem.shippingConst = 0
        }

      }else{
        deliveryDate.push({ ...action.payload, shippingConst: 0 });
      }

      let shippingConst =0;
      deliveryDate.forEach((item) => {
        shippingConst += item.shippingConst
      })

      state.shippingCost = shippingConst;
      
    }
  }
})

export default deliveryDateSlice.reducer;
export const { addDeliveryDate } = deliveryDateSlice.actions;