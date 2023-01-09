import styled from "styled-components";
import { Color, Fonts } from "ui";

export const Input = styled.input`
  width: 90%;
  padding: 10px 20px;
  color: ${Color.Secondary};
  border: 1px solid ${Color.PrimaryDark};
  border-radius: 10px;
  opacity: 30%;
  ${Fonts.BodyRegular}
  outline: none;

  &::placeholder {
    ${Fonts.BodyRegular}
    ${Color.Gray}
    opacity: 1
  }
  &:hover {
    border: 1px solid ${Color.PrimaryDark};
    transition: all 0.5s;
  }
  &:focus {
    opacity: 80%;
  }
`;
export const Button = styled.button`
  align-self: center;
  width: 24px;
  height: 24px;
  margin-left: 10px;
  margin-right: 10px;
  background: transparent;
  border: none;
  color: ${Color.PrimaryDark};
  cursor: pointer;
`;
export const StyledSearch = styled.form`
  display: flex;
  width: 500px;
  margin-left: 20px;
`;
