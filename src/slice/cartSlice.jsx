import { createSlice } from "@reduxjs/toolkit";

export const cartslice =createSlice({
    name:'cart',
    initialState:{
        items:[]
    },
   reducers: {
    addItem: (state, action) => {
        const item = action.payload;
        const existingItem = state.items.find(
            (i) => i.card.info.id === item.card.info.id
        );
        if (existingItem) {
            existingItem.quantity = (existingItem.quantity || 1) + 1;
        } else {
            state.items.push({ ...item, quantity: 1 });
        }
    },
    removeItem: (state, action) => {
        // Optionally, you can decrease quantity or remove item
        const id = action.payload.card.info.id;
        const existingItem = state.items.find(
            (i) => i.card.info.id === id
        );
        if (existingItem && existingItem.quantity > 1) {
            existingItem.quantity -= 1;
        } else {
            state.items = state.items.filter((i) => i.card.info.id !== id);
        }
    },
    clearCart: (state) => {
        state.items.length = 0;
    }
}

})


export const { addItem, removeItem, clearCart } = cartslice.actions;
export default cartslice.reducer;