import { StyledTitleH1 } from "./style";

interface IProps {
  text: string | null;
}

export const Title = ({ text }: IProps) => {
  return <StyledTitleH1>{text}</StyledTitleH1>;
};
