import { useAppDispatch, useAppSelector } from "./redux-hooks";
import { AppDispatch, RootState } from "./store";

import { getNewBooks } from "./selectors";
import { fetchNewBooks } from "./slices";

export { getNewBooks, useAppDispatch, useAppSelector, fetchNewBooks };
export type { AppDispatch, RootState };
