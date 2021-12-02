import styled from "styled-components";
import { Card, CardProps } from "../molecules";

export type CardListingProps = {
  cards: CardProps[];
};

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1rem;
`;

export const CardListing: React.FC<CardListingProps> = ({ cards }) => (
  <Container>
    {cards.map((card, index) => (
      <Card key={index} {...card} />
    ))}
  </Container>
);
