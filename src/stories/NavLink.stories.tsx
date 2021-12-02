import { ComponentMeta } from "@storybook/react";
import { NavLink as NavLinkComponent, NavLinkProps } from "../components/atoms";

export default {
  title: "Design System/Atoms",
  component: NavLinkComponent,
} as ComponentMeta<typeof NavLinkComponent>;

export const NavLink = (args: NavLinkProps) => <NavLinkComponent {...args} />;

NavLink.args = {
  children: "Log in",
};

NavLink.parameters = {
  backgrounds: { default: "light" },
  pseudo: { hover: true },
};
