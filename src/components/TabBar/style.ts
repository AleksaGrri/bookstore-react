import styled from "styled-components";
import { Color, Fonts } from "ui";

interface Iprops {
  isActive?: boolean;
}

export const StyledTabBar = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  padding: 0 64px;
  gap: 50px;
`;

export const TabItem = styled.button<Iprops>`
  ${Fonts.Subline}
  color: ${Color.Secondary};
  border: none;
  background: transparent;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.5s;
  :hover {
    color: ${Color.PrimaryDark};
    scale: 1.2;
  }
  &:focus {
    color: ${Color.PrimaryDark};
  }

  ${(props) =>
    props.isActive ? `color: ${Color.PrimaryDark}` : `${Color.White}`}
`;

export const Container = styled.div`
  display: flex;
  gap: 60px;

  @media (max-width: 576px) {
    flex-direction: column;
  }
`;
export const TabDescription = styled.p`
  padding-bottom: 60px;
  ${Fonts.Subline}
  font-weight: 400;
`;
export const ContainerDescription = styled.div`
  height: 200px;

  @media (max-width: 576px) {
    height: auto;
  }
`;

export const LinkTabDescription = styled.a`
  color: ${Color.PrimaryDark};
  font-weight: 600;
`;
