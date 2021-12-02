import { CardIconRowDetails } from "../molecules";

export type CardIconRowDetailsListingProps = {
  productsRow: React.ComponentProps<typeof CardIconRowDetails>[];
};

export const CardIconRowDetailsListing = ({
  productsRow,
}: CardIconRowDetailsListingProps) => (
  <>
    {productsRow.map((productRow, index) => (
      <CardIconRowDetails key={index} {...productRow} />
    ))}
  </>
);
