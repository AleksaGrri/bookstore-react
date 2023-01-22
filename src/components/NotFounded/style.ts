import styled from "styled-components";
import { Color } from "ui";
import { NotFoundImage } from "assets";

export const NotFoundStyled = styled.div`
  width: 1120px;
  height: 100vh;
  margin: 0 auto;
`;
export const Title = styled.h1`
  padding-top: 150px;
  font-size: 120px;
  font-family: "Oswald", sans-serif;
  color: ${Color.PrimaryDark};
  text-align: center;
`;

export const Description = styled.p`
  margin-top: 20px;
  color: ${Color.PrimaryDark};
  font-family: "Oswald", sans-serif;
  font-size: 40px;
  text-align: center;
  text-transform: uppercase;
`;
