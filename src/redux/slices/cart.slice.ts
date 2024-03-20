import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { CardType } from "../../components/ReproductionsCard/Types";

export interface CartState {
  openCart: boolean;
  cartList: CardType[];
  totalPrice: number;
}

const initialState: CartState = {
  openCart: false,
  cartList: [],
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setOpenCart: (state, action) => {
      state.openCart = action.payload;
    },
    setCartList: (state, action) => {
      state.cartList = action.payload;
      console.log(localStorage.getItem("cartItemsStorage"));
    },
    removeCartItem: (state, action) => {
      const findItem = state.cartList.find(
        (card) => card.id === action.payload
      );

      if (findItem) {
        state.totalPrice -= findItem.price;
        state.cartList = state.cartList.filter(
          (card) => card.id !== action.payload
        );
      }
    },
    clearCart: (state) => {
      state.cartList = [];
      state.totalPrice = 0;
    },
    setTotalPrice: (state, action) => {
      state.totalPrice = state.totalPrice + action.payload;
    },
  },
});

export const selectIsCartOpen = (state: RootState) => state.cart.openCart;
export const selectCartList = (state: RootState) => state.cart.cartList;

export const {
  setOpenCart,
  setCartList,
  removeCartItem,
  clearCart,
  setTotalPrice,
} = cartSlice.actions;

export default cartSlice.reducer;
