import { createSlice } from "@reduxjs/toolkit";

export interface CategoryState {
  categoryName: string;
}

const initialState: CategoryState = {
  categoryName: "Франция",
};

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
      setCategory: (state, action) => {
          state.categoryName = action.payload
    },
  },
});

export const { setCategory } = categorySlice.actions;

export default categorySlice.reducer;
