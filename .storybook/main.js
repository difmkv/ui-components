var path = require("path");
// const { TsconfigPathsPlugin } = require("tsconfig-paths-webpack-plugin");

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    "@react-theming/storybook-addon",
    "storybook-addon-pseudo-states",
    "storybook-addon-paddings",
  ],
  staticDirs: ["../public"],
};
