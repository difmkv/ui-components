import { ComponentMeta } from "@storybook/react";
import { Link as LinkComponent, LinkProps } from "../components/atoms";

export default {
  title: "Design System/Atoms/Link",
  component: LinkComponent,
} as ComponentMeta<typeof LinkComponent>;

export const Link = (args: LinkProps) => <LinkComponent {...args} />;

Link.args = {
  children: "Sign up now",
};

Link.parameters = { pseudo: { hover: true } };
