import { Link } from "react-router-dom";
import styled from "styled-components";
import { Color, Space, Fonts } from "ui";

export const StyledBookItem = styled.li`
  width: 300px;
  margin: 0 auto;
  margin-bottom: ${Space.Large};
  list-style-type: none;
`;
export const ItemBackground = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 300px;
  margin-bottom: ${Space.Small};
  background-color: ${Color.Purple};
  border-radius: 5px;
`;

export const Image = styled.img`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 215px;
  object-fit: contain;
  background: transparent;
`;

export const Title = styled.h3`
  flex-grow: 1;
  margin-bottom: ${Space.ExtraSmall};
  ${Fonts.H3};
  ${Color.Primary};
  text-transform: uppercase;
`;
export const SubTitle = styled.p`
  flex-grow: 1;
  margin-bottom: ${Space.Large};
  ${Fonts.BodyRegular}
  ${Color.Secondary}
`;
export const Cost = styled(Title)`
  background: transparent;
  color: black;
  margin-top: ${Space.Medium};
  text-transform: capitalize;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;
