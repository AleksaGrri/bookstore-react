import { fetchNewBooks } from "./newBooksSlice";
import { fetchDetailsBook } from "./bookDetailsSlice";
import { addItemFavorites } from "./favoritesSlice";
import { clearCart } from "./cartSlice";
import { removeItem } from "./cartSlice";
import { decrementPage } from "./searchSlice";
import {
  setUser,
  removeUser,
  setThemesDark,
  setThemesLight,
} from "./userSlice";

export {
  fetchNewBooks,
  fetchDetailsBook,
  addItemFavorites,
  clearCart,
  removeItem,
  decrementPage,
  setUser,
  removeUser,
  setThemesDark,
  setThemesLight,
};
