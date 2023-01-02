import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addItemToCart: (state:any, action:any) => {
      const payload = action.payload;
      const index = state.findIndex((p:any) => p.id === payload.id);
      if (index !== -1) {
        state[index].count += 1;
      } else {
        state.push({ ...payload, count: 1 });
      }
    },
    removeItemFromCart: (state:any, action:any) => {
      state = state.filter((item:any) => item.id !== action.payload.id);
    },
    decreaseItemFromCart: (state:any, action:any) => {
      const payload = action.payload;
      const item = state.find((p:any) => p.id === payload.id);
      const index = state.findIndex((p:any) => p.id === payload.id);
      if (item.count > 1) {
        state[index].count -= 1;
      } else {
        state.splice(index, 1);
      }
    },
    clearCart: (state:any) => {
      state.splice(0);
    },
  },
})


export const {addItemToCart,removeItemFromCart,decreaseItemFromCart,clearCart} = cartSlice.actions

export default cartSlice.reducer