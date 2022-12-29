import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Routes,
} from "react-router-dom";
import { MainTemplate } from "templates";

import {
  AccauntPage,
  BoockDetailsPage,
  CartPage,
  FavoritePage,
  HomePage,
  NotFoundPage,
  RegistrationPage,
  ResetPasswordPage,
  SearchPage,
  SigInPage,
} from "../pages";
import { ROUTE } from "./routes";

export const AppRouter = createBrowserRouter(
  createRoutesFromElements(
    <Routes>
      <Route path={ROUTE.HOME} element={<MainTemplate />}>
        <Route index element={<HomePage />} />
        <Route index path={ROUTE.SEARCH} element={<SearchPage />} />
        <Route index path={ROUTE.BOOK_DETAILS} element={<BoockDetailsPage />} />
        <Route index path={ROUTE.ACCOUNT} element={<AccauntPage />} />
        <Route index path={ROUTE.CART} element={<CartPage />} />
        <Route index path={ROUTE.FAVORITES} element={<FavoritePage />} />
        <Route index path={ROUTE.REGISTRATION} element={<RegistrationPage />} />
        <Route index path={ROUTE.SIGNIN} element={<SigInPage />} />
        <Route
          index
          path={ROUTE.RESET_PASSWORD}
          element={<ResetPasswordPage />}
        />
        <Route index path={ROUTE.NOT_FOUND} element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
);
