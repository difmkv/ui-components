import { ComponentMeta, Story } from "@storybook/react";
import {
  ProductsPageWithLayout as ProductsPageWithLayoutComponent,
  ProductsPageProps,
} from "../components/pages";
import { productsData, footerData, navBarData } from "../mocks";

export default {
  title: "Design System/Pages/ProductsPage",
  component: ProductsPageWithLayoutComponent,
} as ComponentMeta<typeof ProductsPageWithLayoutComponent>;

const Template: Story<ProductsPageProps> = (args: ProductsPageProps) => (
  <ProductsPageWithLayoutComponent {...args} />
);

export const ProductsPage = Template.bind({});

ProductsPage.args = {
  footer: footerData,
  navBar: navBarData,
  ...productsData,
} as ProductsPageProps;

ProductsPage.parameters = {
  layout: "fullscreen",
};
