import { configureStore } from "@reduxjs/toolkit";
import newBooksReducer from "./slices/newBooksSlice";
import bookDetailsReducer from "./slices/bookDetailsSlice";
import favoritesDetailsReducer from "./slices/favoritesSlice";
import cartReducer from "./slices/cartSlice";
import searchReducer from "./slices/searchSlice";

export const store = configureStore({
  reducer: {
    newBooks: newBooksReducer,
    bookDetails: bookDetailsReducer,
    favorites: favoritesDetailsReducer,
    cart: cartReducer,
    search: searchReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
