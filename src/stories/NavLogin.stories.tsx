import { ComponentMeta } from "@storybook/react";
import {
  NavLogin as NavLoginComponent,
  NavLoginProps,
} from "../components/molecules";
import { navBarData } from "../mocks";

export default {
  title: "Design System/Molecules",
  component: NavLoginComponent,
} as ComponentMeta<typeof NavLoginComponent>;

export const NavLogin = (args: NavLoginProps) => (
  <NavLoginComponent {...args} />
);

NavLogin.args = {
  navLogin: navBarData.navLogin,
};

NavLogin.parameters = {
  backgrounds: { default: "light" },
};
