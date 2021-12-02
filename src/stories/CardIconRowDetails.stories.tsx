import { ComponentMeta, Story } from "@storybook/react";
import { CardIconRowDetails as CardIconRowDetailsComponent } from "../components/molecules";
import { productsData } from "../mocks";

export default {
  title: "Design System/Organisms",
  component: CardIconRowDetailsComponent,
} as ComponentMeta<typeof CardIconRowDetailsComponent>;

const Template: Story<any> = (args) => (
  <CardIconRowDetailsComponent {...args} />
);

export const CardIconRowDetails = Template.bind({});

CardIconRowDetails.args = {
  ...productsData.productsRow[0],
};

CardIconRowDetails.parameters = {
  paddings: {
    default: "Large",
  },
};
