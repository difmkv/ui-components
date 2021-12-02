import { addDecorator } from "@storybook/react";
import themeDecorator from "./themeDecorator";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  addDecorator: addDecorator(themeDecorator),
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
  paddings: {
    values: [
      { name: "None", value: "0" },
      { name: "Small", value: "16px" },
      { name: "Medium", value: "32px" },
      { name: "Large", value: "64px" },
    ],
    default: "None",
  },
};
