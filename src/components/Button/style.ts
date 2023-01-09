import styled from "styled-components";
import { Color, Fonts } from "ui";

export const StyledButton = styled.button`
  box-sizing: border-box;
  display: block;
  margin: 0 auto;
  padding: 15px 10px;
  ${Fonts.BodyRegular}
  text-align: center;
  color: ${Color.White};
  background-color: ${Color.PrimaryDark};
  border: 1px solid ${Color.PrimaryDark};
  :hover {
    background-color: ${Color.White};
    color: ${Color.PrimaryDark};
    border: 1px solid ${Color.PrimaryDark};
    transition: all 0.5s;
  }
`;
