import styled from "styled-components";
import { Color, Fonts, Space } from "ui";
import { StyledButton } from "../Button/style";

export const StyledBookItem = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 30px;
  padding-bottom: 30px;
  border-bottom: 1px solid ${Color.Secondary};
  margin: 0 64px;

  @media (max-width: 1120px) {
    flex-direction: column;
    justify-content: center;
  }
`;

export const ItemBackground = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 380px;
  height: 400px;
  margin-bottom: ${Space.Small};
  background-color: ${Color.Orange};
  border-radius: 5px;
  @media (max-width: 1120px) {
    margin: 0 auto;
  }
`;

export const Cost = styled.div`
  padding-top: 40px;
  background: transparent;
  color: black;
  ${Fonts.H3}
`;
export const Link = styled.div``;

export const Description = styled.div`
  ${Fonts.Subline}
  max-width: 400px;

  @media (max-width: 1120px) {
    max-width: 800px;
    padding-top: 30px;
    padding-bottom: 30px;
    margin: 0 auto;
  }
  p {
    padding-top: 10px;
  }
`;
export const Title = styled.h1`
  ${Fonts.H1}
  padding: 0 64px;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
`;

export const RateWithBuy = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

export const Button = styled(StyledButton)`
  margin: 0;
  width: 130%;
  padding: 15px 15px;

  @media (max-width: 1120px) {
    width: 30%;
    margin: 0 auto;
    margin-top: 30px;
  }
  @media (max-width: 800px) {
    padding: 15px 10px;
    margin-top: 20px;
    width: 80%;
  }
`;

export const SubTitle = styled.div`
  @media (max-width: 1120px) {
    margin-top: 20px;
  }
`;

export const ButtonDeleteBook = styled(StyledButton)`
  display: block;
  font-size: 24px;
  margin: 0 64px 0 0;
  padding: 0;
  background: transparent;
  color: ${Color.PrimaryDark};
  outline: none;
  border: none;
  cursor: pointer;
  :hover {
    border: none;
    background: none;
  }
`;

export const Images = styled.img`
  background: transparent;
`;

export const StyledDescription = styled.p`
  ${Fonts.Subline}
  color: ${Color.PrimaryDark};
`;

export const StyledLanguage = styled.p`
  ${Fonts.BodyRegular}
  color: ${Color.DarkGray};
`;

export const StyledSubtitle = styled.p`
  ${Fonts.BodyRegular}
  color: ${Color.DarkGray};
`;

export const StyledAuthor = styled.p`
  ${Fonts.BodyBold}
  color: ${Color.PrimaryDark};
`;

export const StyledYear = styled.p`
  ${Fonts.BodyBold}
  color: ${Color.DarkGray};
`;
