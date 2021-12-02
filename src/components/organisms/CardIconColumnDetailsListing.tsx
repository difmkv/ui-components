import { CardIconColumnDetails } from "../molecules";

export type CardIconColumnDetailsListingProps = {
  productsColumn: React.ComponentProps<typeof CardIconColumnDetails>[];
};

export const CardIconColumnDetailsListing = ({
  productsColumn,
}: CardIconColumnDetailsListingProps) => (
  <>
    {productsColumn.map((productColumn, index) => (
      <CardIconColumnDetails key={index} {...productColumn} />
    ))}
  </>
);
