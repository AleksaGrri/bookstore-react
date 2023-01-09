import { Link } from "react-router-dom";
import {
  BookstoreIcon,
  CartHeaderIcon,
  HeartHeaderIcon,
  UserHeaderIcon,
} from "assets";
import { useWindowSize } from "hooks";
import { ROUTE } from "router";
import { BurgerMenu } from "components/BurgerMenu";
import { Search } from "components/Search";
import { TogglerTheme } from "components/TogglerTheme";
import {
  CartLogo,
  HeartLogo,
  Logo,
  Navbar,
  StyledBurgerNavbar,
  UserLogo,
} from "./style";

export const BurgerNavbar = () => {
  const { width = 0 } = useWindowSize();

  return (
    <StyledBurgerNavbar>
      <Link to={ROUTE.HOME}>
        <Logo>
          <BookstoreIcon />
        </Logo>
      </Link>
      {width > 800 && (
        <>
          <Search />
          <TogglerTheme />
          <Navbar>
            <Link to={ROUTE.FAVORITES}>
              <HeartLogo>
                <HeartHeaderIcon />
              </HeartLogo>
            </Link>
            <Link to={ROUTE.CART}>
              <CartLogo>
                <CartHeaderIcon />
              </CartLogo>
            </Link>
            <Link to={ROUTE.ACCOUNT}>
              <UserLogo>
                <UserHeaderIcon />
              </UserLogo>
            </Link>
          </Navbar>
        </>
      )}
      <BurgerMenu />
    </StyledBurgerNavbar>
  );
};
