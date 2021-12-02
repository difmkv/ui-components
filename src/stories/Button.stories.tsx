import { Story, Meta } from "@storybook/react";
import { Button as ButtonComponent, ButtonProps } from "../components/atoms";

export default {
  component: ButtonComponent,
  title: "Design System/Atoms/Button",
} as Meta;

const Template: Story<ButtonProps> = (args) => <ButtonComponent {...args} />;

export const Button = Template.bind({});

Button.args = {
  children: "Sign in",
};
