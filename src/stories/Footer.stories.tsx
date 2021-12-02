import { ComponentMeta, Story } from "@storybook/react";
import {
  Footer as FooterComponent,
  FooterProps,
} from "../components/organisms";
import { footerData } from "../mocks";

export default {
  title: "Design System/Organisms/Footer",
  component: FooterComponent,
} as ComponentMeta<typeof FooterComponent>;

const Template: Story<FooterProps> = (args: FooterProps) => (
  <FooterComponent {...args} />
);

export const Footer = Template.bind({});

Footer.args = {
  tagline: footerData.tagline,
  socialIcons: footerData.socialIcons,
  columns: footerData.columns,
} as FooterProps;

Footer.parameters = {
  layout: "fullscreen",
  backgrounds: { default: "light" },
};
