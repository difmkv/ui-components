import { ThemeProvider } from "styled-components";
import { theme, GlobalStyle } from "../src/theme";

const ThemeDecorator = (storyFn: Function) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {storyFn()}
  </ThemeProvider>
);

export default ThemeDecorator;
