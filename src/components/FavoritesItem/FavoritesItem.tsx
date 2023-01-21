import { Link } from "react-router-dom";
import { useAppDispatch } from "store";
import { addItem } from "store/slices/cartSlice";
import { addItemFavorites } from "store";
import { IBookDetails } from "types";
import { Raiting } from "../Raiting";
import {
  StyledBookItem,
  ItemBackground,
  Cost,
  SubTitle,
  Title,
  Description,
  RateWithBuy,
  Button,
  TitleContainer,
  ButtonDeleteBook,
  Images,
  StyledDescription,
  StyledLanguage,
  StyledSubtitle,
  StyledAuthor,
  StyledYear,
} from "./style";

interface IProps {
  book: IBookDetails;
}

export const FavoritesItem = ({ book }: IProps) => {
  const dispatch = useAppDispatch();

  const handleAddToCart = () => {
    return dispatch(addItem(book));
  };
  const handleDeleteBook = () => {
    dispatch(addItemFavorites(book));
  };

  return (
    <>
      <TitleContainer>
        <Title>{book.title}</Title>
        <ButtonDeleteBook onClick={handleDeleteBook}>✖</ButtonDeleteBook>
      </TitleContainer>
      <StyledBookItem>
        <ItemBackground>
          <Cost>{book.price === "$0.00" ? "free" : book.price}</Cost>
          <Link to={`/book/${book.isbn13}`}>
            <Images src={book.image} alt={book.image} />
          </Link>
        </ItemBackground>
        <SubTitle>
          <Description>
            <StyledDescription>{book.desc}</StyledDescription>
            <StyledLanguage>{book.language}</StyledLanguage>
            <StyledSubtitle>{book.subtitle}</StyledSubtitle>
            <StyledAuthor>{book.authors}</StyledAuthor>
            <StyledYear>{book.year}</StyledYear>
          </Description>
        </SubTitle>
        <RateWithBuy>
          <Raiting rating={book.rating} />
          <Button onClick={handleAddToCart}>Add to Cart</Button>
        </RateWithBuy>
      </StyledBookItem>
    </>
  );
};
