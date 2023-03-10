import styled from "styled-components";
import { Color, Fonts } from "ui";

export const StyledAccount = styled.div`
  margin: 0 auto;
  max-width: 500px;
  margin-top: 20px;
  border: 1px solid ${Color.Secondary};
  border-radius: 10px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: transparent;
`;

export const Title = styled.h2`
  ${Fonts.H2}
  padding-top: 20px;
  padding-left: 30px;
  background: transparent;
`;
export const Description = styled.div`
  padding-left: 30px;
  margin-left: 10px;
`;

export const SubTitle = styled.div`
  padding: 10px 5px;
  padding-left: 30px;
`;

export const BoldSubtitle = styled.p`
  ${Fonts.H3}
  color: ${Color.PrimaryDark}
`;
