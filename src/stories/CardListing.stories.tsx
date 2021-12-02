import { ComponentMeta, Story } from "@storybook/react";
import {
  CardListing as CardListingComponent,
  CardListingProps,
} from "../components/organisms";
import { cardListingData } from "../mocks";

export default {
  title: "Design System/Organisms/CardListing",
  component: CardListingComponent,
} as ComponentMeta<typeof CardListingComponent>;

const Template: Story<CardListingProps> = (args) => (
  <CardListingComponent {...args} />
);

export const CardListing = Template.bind({});

CardListing.args = {
  cards: cardListingData,
};
