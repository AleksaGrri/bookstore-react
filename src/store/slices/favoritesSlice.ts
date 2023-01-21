import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBookDetails } from "types";
import { FavoritesState } from "../types";

const initFavorite = () => {
  if (!localStorage.getItem("favorites")) {
    localStorage.setItem("favorites", JSON.stringify([]));
  }
  return JSON.parse(localStorage.getItem("favorites") as string);
};

const initialState: FavoritesState = {
  item: initFavorite(),
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addItemFavorites: (state, { payload }: PayloadAction<IBookDetails>) => {
      if (!state.item.find((book) => book.isbn13 === payload.isbn13)) {
        state.item.push(payload);
      } else {
        const index = state.item.findIndex(
          (book) => book.isbn13 === payload.isbn13
        );
        state.item.splice(index, 1);
      }
      localStorage.setItem("favorites", JSON.stringify(state.item));
    },
  },
});

export const { addItemFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;
