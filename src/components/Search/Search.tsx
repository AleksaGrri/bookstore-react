import { StyledSearch, Input, Button } from "./style";
import { SearchLogoIcon } from "assets";

export const Search = () => {
  return (
    <StyledSearch>
      <Input type="text" placeholder="Search..." name="search" />
      <Button type="submit">
        <SearchLogoIcon />
      </Button>
    </StyledSearch>
  );
};
