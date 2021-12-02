import { ComponentMeta, Story } from "@storybook/react";
import { FooterProps, NavBarProps } from "../components/organisms";
import {
  HomePageWithLayout as HomePageWithLayoutComponent,
  HomePageProps,
} from "../components/pages";
import {
  greetingData,
  tagListingData,
  cardListingData,
  footerData,
  navBarData,
} from "../mocks";

export default {
  title: "Design System/Pages/HomePage",
  component: HomePageWithLayoutComponent,
} as ComponentMeta<typeof HomePageWithLayoutComponent>;

const Template: Story<HomePageProps> = (args: HomePageProps) => (
  <HomePageWithLayoutComponent {...args} />
);

export const HomePage = Template.bind({});

HomePage.args = {
  greeting: greetingData,
  tags: tagListingData,
  cards: cardListingData,
  footer: footerData as FooterProps,
  navBar: navBarData as NavBarProps,
};

HomePage.parameters = {
  layout: "fullscreen",
};
