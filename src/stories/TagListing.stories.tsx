import { ComponentMeta } from "@storybook/react";
import {
  TagListing as TagListingComponent,
  TagListingProps,
} from "../components/organisms";

import { tagListingData } from "../mocks";

export default {
  title: "Design System/Organisms",
  component: TagListingComponent,
} as ComponentMeta<typeof TagListingComponent>;

export const TagListing = (args: TagListingProps) => (
  <TagListingComponent {...args} />
);

TagListing.args = {
  ...tagListingData,
};

TagListing.parameters = {
  backgrounds: { default: "light" },
};
