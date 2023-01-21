import { useAppDispatch, useAppSelector } from "./redux-hooks";
import { AppDispatch, RootState } from "./store";

import { getNewBooks } from "./selectors";
import { fetchNewBooks } from "./slices";
import { addItemFavorites } from "./slices";
import { fetchDetailsBook } from "./slices";
import { getBookDetails } from "./selectors";

import { getFavorites } from "./selectors";
import { getCart } from "./selectors";
import { clearCart } from "./slices";

import { removeItem } from "./slices";

export {
  getNewBooks,
  useAppDispatch,
  useAppSelector,
  fetchNewBooks,
  getBookDetails,
  fetchDetailsBook,
  addItemFavorites,
  removeItem,
  getFavorites,
  getCart,
  clearCart,
};
export type { AppDispatch, RootState };
