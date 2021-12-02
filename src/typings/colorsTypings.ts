declare type Color =
  | "main"
  | "secondary"
  | "tertiary"
  | "gray"
  | "darkGrey"
  | "fontColorHeader"
  | "fontColorBody"
  | "darkBackground"
  | "accentBackground"
  | "white"
  | "dark"
  | "barossa"
  | "teal"
  | "cornFlower"
  | "darkAccent";

export declare type Colors = {
  [key in Color]: string;
};
