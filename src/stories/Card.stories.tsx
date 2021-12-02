import { ComponentMeta, Story } from "@storybook/react";
import { Card as CardComponent, CardProps } from "../components/molecules";
import { cardListingData } from "../mocks";

export default {
  title: "Design System/Molecules/Card",
  component: CardComponent,
  decorators: [
    (Story) => (
      <div style={{ maxWidth: "35rem" }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof CardComponent>;

const Template: Story<CardProps> = (args) => <CardComponent {...args} />;

export const DesktopCard = Template.bind({});
export const MobileCard = Template.bind({});

DesktopCard.args = {
  ...cardListingData[0],
};

MobileCard.args = {
  ...cardListingData[0],
};

MobileCard.parameters = {
  viewport: {
    defaultViewport: "iphonex",
  },
};
