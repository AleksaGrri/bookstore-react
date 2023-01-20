import { useAppDispatch, useAppSelector } from "./redux-hooks";
import { AppDispatch, RootState } from "./store";

import { getNewBooks } from "./selectors";
import { fetchNewBooks } from "./slices";

import { fetchDetailsBook } from "./slices";
import { getBookDetails } from "./selectors";

export {
  getNewBooks,
  useAppDispatch,
  useAppSelector,
  fetchNewBooks,
  getBookDetails,
  fetchDetailsBook,
};
export type { AppDispatch, RootState };
