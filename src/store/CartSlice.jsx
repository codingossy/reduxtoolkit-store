import { createSlice } from '@reduxjs/toolkit'
import { products } from './DataFile';

const initialState = {
  products: products,
   loading: '',
   carts: []
}

const CartSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    // add to cart 
    AddToCart: (state, action) => {
      const cartItem = state.products.find((item) => {
        return item.id === action.payload;
      });
      state.carts = [...state.carts, cartItem];
    },

     // remove from cart
     RemoveFromCart: (state, action) => {
      const DeleteItems = state.carts.filter((item) => {
        return item.id !== action.payload;
      });
      state.carts = DeleteItems;
    },
    clearCart: (state, action) => {
      state.carts = [];
    },


  },

});

export const { AddToCart, RemoveFromCart,clearCart } = CartSlice.actions

export default CartSlice.reducer