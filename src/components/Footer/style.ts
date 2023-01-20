import styled from "styled-components";
import { Space, Color, Fonts } from "ui";

export const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
  margin-top: ${Space.ExtraLarge};
  margin-left: 64px;
  margin-right: 64px;
  border-top: 1px solid ${Color.Gray};

  @media (max-width: 800px) {
    margin-left: ${Space.Large};
    margin-right: ${Space.Large};
  }
`;
export const Description = styled.p`
  padding: 36px 0;
  ${Fonts.BodyRegular}
  ${Color.Secondary}
  :first-child {
    text-align: left;
  }
  :last-child {
    text-align: right;
  }
`;
export const Container = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;
`;
export const Title = styled.p`
  color: ${Color.PrimaryDark};
`;
export const Git = styled.div`
  margin-top: 10px;
`;
