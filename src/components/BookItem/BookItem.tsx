import { INewBooksApi } from "types";
import {
  Cost,
  ItemBackground,
  StyledBookItem,
  Title,
  Image,
  StyledLink,
} from "./style";

interface IProps {
  book: INewBooksApi;
  index?: number;
}

export const BookItem = ({ book }: IProps) => {
  return (
    <StyledBookItem>
      <StyledLink to={`/book/${book.isbn13}`}>
        <ItemBackground>
          <Cost>{book.price === "$0.00" ? "free" : book.price}</Cost>
          <Image src={book.image} alt={book.image} />
        </ItemBackground>
      </StyledLink>
      <Title>{book.title}</Title>
    </StyledBookItem>
  );
};
