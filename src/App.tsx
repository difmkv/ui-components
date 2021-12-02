import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "./theme";
import { Button } from "./components/atoms";

export const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Button>Button</Button>
  </ThemeProvider>
);
