import styled from "styled-components";
import { LinkListing, LinkListingProps } from ".";

const Container = styled.div`
  color: ${({ theme }) => theme.colors.secondary};
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export type ColumnListingProps = {
  columns: LinkListingProps[];
};

export const ColumnListing: React.FC<ColumnListingProps> = ({ columns }) => (
  <Container>
    {columns.map((column, index) => (
      <LinkListing key={index} {...column} />
    ))}
  </Container>
);
