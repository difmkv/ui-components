import { ComponentMeta, Story } from "@storybook/react";
import { CardIconColumnDetails as CardIconColumnDetailsComponent } from "../components/molecules";
import { productsData } from "../mocks";

export default {
  title: "Design System/Organisms",
  component: CardIconColumnDetailsComponent,
} as ComponentMeta<typeof CardIconColumnDetailsComponent>;

const Template: Story<any> = (args) => (
  <CardIconColumnDetailsComponent {...args} />
);

export const CardIconColumnDetails = Template.bind({});

CardIconColumnDetails.args = {
  ...productsData.productsColumn[0],
};

CardIconColumnDetails.parameters = {
  paddings: {
    default: "Large",
  },
};
