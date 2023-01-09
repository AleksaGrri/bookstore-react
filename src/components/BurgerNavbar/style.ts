import styled from "styled-components";
import { IBookDetails } from "types";
import { Color } from "ui";

export const StyledBurgerNavbar = styled.nav`
  display: flex;
  justify-content: space-between;
`;
export const Logo = styled.div`
  margin-top: 5px;
  color: ${Color.PrimaryDark};
  cursor: pointer;
`;
export const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 184px;
`;
export const HeartLogo = styled.div`
  cursor: pointer;
  stroke: ${Color.PrimaryDark};

  :hover {
    stroke: goldenrod;
    transition: all 0.5s;
  }
`;
export const CartLogo = styled.div`
  width: 24px;
  height: 24px;
  stroke: ${Color.PrimaryDark};
  cursor: pointer;

  :hover {
    stroke: goldenrod;
    transition: all 0.5s;
  }
`;
export const UserLogo = styled.div`
  width: 24px;
  height: 24px;
  stroke: ${Color.PrimaryDark};
  cursor: pointer;

  :hover {
    stroke: goldenrod;
    transition: all 0.5s;
  }
`;
