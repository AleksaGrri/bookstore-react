import { configureStore } from "@reduxjs/toolkit";
import newBooksReducer from "./slices/newBooksSlice";
import bookDetailsReducer from "./slices/bookDetailsSlice";
import favoritesDetailsReducer from "./slices/favoritesSlice";
import cartReducer from "./slices/cartSlice";

export const store = configureStore({
  reducer: {
    newBooks: newBooksReducer,
    bookDetails: bookDetailsReducer,
    favorites: favoritesDetailsReducer,
    cart: cartReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
