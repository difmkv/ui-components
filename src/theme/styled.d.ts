import "styled-components";
import { Theme } from "../typings";

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
