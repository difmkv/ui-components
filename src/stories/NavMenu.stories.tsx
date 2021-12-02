import { ComponentMeta } from "@storybook/react";
import {
  NavMenu as NavMenuComponent,
  NavMenuProps,
} from "../components/molecules";
import { navBarData } from "../mocks";

export default {
  title: "Design System/Molecules",
  component: NavMenuComponent,
} as ComponentMeta<typeof NavMenuComponent>;

export const NavMenu = (args: NavMenuProps) => <NavMenuComponent {...args} />;

NavMenu.args = {
  navMenu: navBarData.navMenu,
};

NavMenu.parameters = {
  backgrounds: { default: "light" },
};
