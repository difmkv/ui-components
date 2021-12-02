import { ComponentMeta } from "@storybook/react";
import {
  NavBar as NavBarComponent,
  NavBarProps,
} from "../components/organisms";
import { navBarData } from "../mocks";

export default {
  title: "Design System/Organisms",
  component: NavBarComponent,
} as ComponentMeta<typeof NavBarComponent>;

export const NavBar = (args: NavBarProps) => <NavBarComponent {...args} />;

NavBar.args = {
  ...navBarData,
};

NavBar.parameters = {
  backgrounds: { default: "light" },
};
