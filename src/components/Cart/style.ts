import styled from "styled-components";
import { Color, Fonts } from "ui";
import { StyledButton } from "../Button/style";

export const StyledCart = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 30px;
  border: 1px solid ${Color.PrimaryDark};
  border-radius: 5px;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export const Container = styled.div`
  display: flex;
  gap: 10px;
  max-width: 500px;
  background: transparent;

  @media (max-width: 800px) {
    justify-content: center;
    max-width: 800px;
  }
`;

export const Title = styled.h1`
  ${Fonts.BodyBold}
`;

export const Subtitel = styled.h1`
  ${Fonts.BodyRegular}
`;

export const CountContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media (max-width: 800px) {
    background: transparent;
  }
`;
export const Count = styled.div`
  padding: 30px;
`;
export const CostContainer = styled.div`
  align-items: center;
  align-self: center;
  padding-right: 15px;
  width: 60px;
`;
export const Cost = styled.h1`
  ${Fonts.BodyBold};
  font-size: 26px;
`;
export const ContainerTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  width: 230px;
  padding-top: 30px;
  padding-bottom: 30px;
  margin: 0 auto;

  @media (max-width: 800px) {
    justify-content: center;
    align-items: center;
    align-self: center;
  }
`;
export const Button = styled(StyledButton)`
  display: flex;
  align-items: center;
  align-self: center;
  padding: 0;
  margin: 0;
  margin-right: 25px;
  font-size: 24px;
  border: none;
  background: transparent;
  color: ${Color.PrimaryDark};
  cursor: pointer;
  :hover {
    transition: all 0.5s;
    border: none;
  }
`;
export const ButtonCount = styled(StyledButton)`
  width: 30px;
  height: 30px;
  padding: 0;
  border-radius: 50%;
  cursor: pointer;

  @media (max-width: 800px) {
    margin: 0;
  }
`;
export const Images = styled.img`
  background: ${Color.Green};
  width: 150px;
  margin: 15px;
`;
