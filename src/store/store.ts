import { configureStore } from "@reduxjs/toolkit";
import newBooksReducer from "./slices/newBooksSlice";
import bookDetailsReducer from "./slices/bookDetailsSlice";
import favoritesDetailsReducer from "./slices/favoritesSlice";

export const store = configureStore({
  reducer: {
    newBooks: newBooksReducer,
    bookDetails: bookDetailsReducer,
    favorites: favoritesDetailsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
