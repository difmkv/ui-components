import { ComponentMeta } from "@storybook/react";
import {
  Details as DetailsComponent,
  DetailsProps,
} from "../components/molecules";
import { cardListingData } from "../mocks";

export default {
  title: "Design System/Molecules/Details",
  component: DetailsComponent,
} as ComponentMeta<typeof DetailsComponent>;

export const Details = (args: DetailsProps) => <DetailsComponent {...args} />;

Details.args = {
  title: cardListingData[0].title,
  label: cardListingData[0].label,
  description: cardListingData[0].description,
};
