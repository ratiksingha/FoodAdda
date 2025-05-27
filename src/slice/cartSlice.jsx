import { createSlice } from "@reduxjs/toolkit";

export const cartslice =createSlice({
    name:'cart',
    initialState:{
        items:[]
    },
    reducers:{
        addItem:(state,action)=>{
            state.items.push(action.payload);
        },
        removeItem:(state,action)=>{
            state.items.pop();
        },
        clearCart:(state)=>{
            state.items.length=0;
        }
            
        
    }

})


export const { addItem, removeItem, clearCart } = cartslice.actions;
export default cartslice.reducer;