import { ComponentMeta } from "@storybook/react";
import { Logo as LogoComponent } from "../components/atoms";

export default {
  title: "Design System/Atoms/Logo",
  component: LogoComponent,
} as ComponentMeta<typeof LogoComponent>;

export const Logo = (args: any) => <LogoComponent {...args} />;
