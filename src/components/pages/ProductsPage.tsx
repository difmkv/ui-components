import { HeaderTwo, Spacer } from "../atoms";
import {
  CardIconColumnDetailsListing,
  CardIconRowDetailsListing,
  FooterProps,
  NavBarProps,
} from "../organisms";
import { withLayout } from "../hocs";
import { IconType } from "../icons";

type Product = {
  icon: IconType;
  title: string;
  description: string;
  label: string;
  testId: string;
};

export type ProductsPageProps = {
  productsColumnTitle: string;
  productsColumn: Product[];
  productsRowTitle: string;
  productsRow: Product[];
  navBar: NavBarProps;
  footer: FooterProps;
};

export const ProductsPage: React.FC<ProductsPageProps> = ({
  productsRowTitle,
  productsRow,
  productsColumnTitle,
  productsColumn,
}) => (
  <>
    <Spacer mt={2}>
      <HeaderTwo>{productsRowTitle}</HeaderTwo>
    </Spacer>
    <Spacer rowGap={2} my={2}>
      <CardIconRowDetailsListing productsRow={productsRow} />
    </Spacer>
    <HeaderTwo>{productsColumnTitle}</HeaderTwo>
    <Spacer gap={1} my={4}>
      <CardIconColumnDetailsListing productsColumn={productsColumn} />
    </Spacer>
  </>
);

export const ProductsPageWithLayout =
  withLayout<ProductsPageProps>(ProductsPage);
