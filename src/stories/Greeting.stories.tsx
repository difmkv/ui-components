import { ComponentMeta } from "@storybook/react";
import {
  Greeting as GreetingComponent,
  GreetingProps,
} from "../components/molecules";
import { greetingData } from "../mocks";

export default {
  title: "Design System/Molecules/Greeting",
  component: GreetingComponent,
} as ComponentMeta<typeof GreetingComponent>;

export const Greeting = (args: GreetingProps) => (
  <GreetingComponent {...args} />
);

Greeting.args = {
  ...greetingData,
};

Greeting.parameters = {
  backgrounds: { default: "light" },
};
