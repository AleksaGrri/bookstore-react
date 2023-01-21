import { HiArrowSmDown, HiArrowSmUp } from "react-icons/hi";
import { ArrowBack, ErrorMessage, Loader, Raiting, Title } from "components";
import { useToggle } from "hooks";
import { getFavorites, useAppDispatch, useAppSelector, getCart } from "store";
import { IBookDetails } from "types";
import { addItemFavorites } from "store";
import {
  BackGround,
  Button,
  Container,
  Cost,
  Description,
  DetailsContainer,
  LabelText,
  MoreDetails,
  Options,
  Price,
  StyledBookDetails,
  ValueText,
  Image,
  ButtonContainer,
  ContainerArrow,
  LinkLabelText,
  ButtonAddFavorite,
} from "./style";
import { addItem, removeItem } from "store/slices/cartSlice";

interface IProps {
  isLoading: boolean;
  book: IBookDetails;
  error: string | null;
  details: boolean;
  handleDetails: () => void;
}

export const BookDetails = ({
  isLoading,
  book,
  error,
  details,
  handleDetails,
}: IProps) => {
  const [isActive, setIsActive] = useToggle();
  const dispatch = useAppDispatch();
  const addFavorite = () => {
    dispatch(addItemFavorites(book));
  };

  const addCart = () => {
    dispatch(addItem(book));
  };

  const removeCart = () => {
    dispatch(removeItem(book));
  };

  const toggleCartItem = () => {
    isCart ? removeCart() : addCart();
  };

  const { item } = useAppSelector(getFavorites);

  const { cart } = useAppSelector(getCart);

  const isFavorite = Boolean(
    item.find((bookFav) => book.isbn13 === bookFav.isbn13)
  );

  const isCart = Boolean(
    cart.find((bookCart) => book.isbn13 === bookCart.isbn13)
  );

  return (
    <>
      <ArrowBack />
      {isLoading && <Loader size="50px" margin="200px" />}
      {error && <ErrorMessage text={error} />}
      {book && (
        <StyledBookDetails>
          <Title text={book.title}></Title>
          <DetailsContainer>
            <BackGround>
              <Image src={book.image} />
            </BackGround>
            <Description>
              <Cost>
                <Price>{book.price === "$0.00" ? "free" : book.price}</Price>
                <Raiting rating={book.rating} />
              </Cost>
              <Options>
                <Container>
                  <ValueText>Authors</ValueText>
                  <LabelText>{book.authors}</LabelText>
                </Container>
                <Container>
                  <ValueText>Publisher</ValueText>
                  <LabelText>{book.publisher}</LabelText>
                </Container>
                <Container>
                  <ValueText>Language</ValueText>
                  <LabelText>{book.language}</LabelText>
                </Container>
                <Container>
                  <ValueText>Year</ValueText>
                  <LabelText>{book.year}</LabelText>
                </Container>
                <div onClick={setIsActive}>
                  <MoreDetails onClick={handleDetails}>
                    {isActive ? (
                      <ContainerArrow>
                        More details <HiArrowSmUp />
                      </ContainerArrow>
                    ) : (
                      <ContainerArrow>
                        More details <HiArrowSmDown />
                      </ContainerArrow>
                    )}
                  </MoreDetails>
                </div>

                {details && (
                  <>
                    <Container>
                      <ValueText>Pages</ValueText>
                      <LabelText>{book.pages}</LabelText>
                    </Container>
                    <Container>
                      <ValueText>ISBN13</ValueText>
                      <LabelText>{book.isbn13}</LabelText>
                    </Container>
                    <Container>
                      <ValueText>Link</ValueText>
                      <LabelText>
                        <LinkLabelText href={book.url} target="blank">
                          See more
                        </LinkLabelText>
                      </LabelText>
                    </Container>
                  </>
                )}
              </Options>
              <ButtonContainer>
                <Button onClick={toggleCartItem}>
                  {isCart ? "Delete from cart" : "Add to cart"}
                </Button>
                <ButtonAddFavorite onClick={addFavorite}>
                  {isFavorite ? "Delete from favorites" : "Add to favorites"}
                </ButtonAddFavorite>
              </ButtonContainer>
            </Description>
          </DetailsContainer>
        </StyledBookDetails>
      )}
    </>
  );
};
