import { configureStore } from "@reduxjs/toolkit";
import newBooksReducer from "./slices/newBooksSlice";

export const store = configureStore({
  reducer: { newBooks: newBooksReducer },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
