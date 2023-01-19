import styled from "styled-components";
import { Fonts, Color } from "ui";
import { StyledButton } from "../Button/style";

export const StyledSubscribe = styled.div`
  margin: 0 64px;
  padding-bottom: 56px;
  background: transparent;

  @media (max-width: 568px) {
    text-align: left;
    margin-left: 16px;
    margin-right: 16px;
  }
`;

export const Title = styled.h2`
  padding-top: 56px;
  ${Fonts.H2};
  background: transparent;

  @media (max-width: 568px) {
    padding-top: 16px;
  }
`;
export const Subtitle = styled.p`
  padding-top: 10px;
  ${Fonts.Subline}
  font-weight: 400;
  color: ${Color.Secondary};
  background: transparent;

  @media (max-width: 568px) {
    ${Fonts.BodyRegular}
  }
`;
export const Input = styled.input`
  display: inline-block;
  flex: 0 1 80%;
  padding: 20px 0px 20px 20px;
  margin: 0;
  outline: none;
  border: none;

  @media (max-width: 568px) {
    padding: 10px 5px;
  }
`;
export const Button = styled(StyledButton)`
  display: inline-block;
  margin: 0;
  padding-left: 15px;
  padding-right: 15px;
  color: ${Color.White};
  background-color: ${Color.PrimaryDark};
  border-left: 1px solid black;
  cursor: pointer;

  @media (max-width: 568px) {
    padding: 5px 0;
  }
`;
export const Background = styled.div`
  margin-top: 56px;
  background: ${Color.Purple};
`;
export const InputContainer = styled.form`
  display: flex;
  padding-top: 32px;
  background: transparent;

  @media (max-width: 568px) {
    flex-direction: column;
    gap: 20px;
  }
`;
