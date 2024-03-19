import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { CardType } from "../../components/ReproductionsCard/Types";

export interface CartState {
  openCart: boolean;
  cartList: CardType[];
}

const initialState: CartState = {
  openCart: false,
  cartList: [],
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
    },
    removeCartItem: (state, action) => {
      state.cartList = state.cartList.filter((card) => card.id !== action.payload);
    },
  },
});

export const selectIsCartOpen = (state: RootState) => state.cart.openCart;
export const selectCartList = (state: RootState) => state.cart.cartList;

export const { setOpenCart, setCartList, removeCartItem } = cartSlice.actions;

export default cartSlice.reducer;
