import { LogOut } from "../LogOut";
import {
  BoldSubtitle,
  Container,
  Description,
  StyledAccount,
  SubTitle,
  Title,
} from "./style";

export const Account = () => {
  return (
    <StyledAccount>
      <Container>
        <Title>Welcome to the account pages</Title>
        <Description>
          <SubTitle>
            Your email upon registration:
            <BoldSubtitle></BoldSubtitle>
          </SubTitle>
          <SubTitle>
            Unique number assigned to you:
            <BoldSubtitle></BoldSubtitle>
          </SubTitle>
          <SubTitle>
            Date of your registration: <BoldSubtitle></BoldSubtitle>
          </SubTitle>
        </Description>
        <LogOut />
      </Container>
    </StyledAccount>
  );
};
