import { Theme } from "../typings";
import PoppinsLight from "../fonts/Poppins-Light.ttf";
import PoppinsRegular from "../fonts/Poppins-Regular.ttf";
import PoppinsBold from "../fonts/Poppins-Bold.ttf";
import { size } from "./breakpoints";

export const theme: Theme = {
  colors: {
    main: "#52BD95",
    teal: "#008080",
    secondary: "#7B6AC5",
    tertiary: "#E9E6F6",
    barossa: "#c6dbe5",
    cornFlower: "#dcebf3",
    darkAccent: "#e7eff3",
    darkGrey: "#A2A5B3",
    fontColorHeader: "#0D1537",
    fontColorBody: "#7C829D",
    darkBackground: "#12183A",
    accentBackground: "#4A427E",
    white: "#fff",
    dark: "#00",
    gray: "#E5E6E9",
  },
  fonts: {
    body: {
      fontSource: PoppinsRegular,
      fontFamily: "PoppinsRegular",
    },
    title: {
      fontSource: PoppinsBold,
      fontFamily: "PoppinsBold",
    },
    subtitle: {
      fontSource: PoppinsLight,
      fontFamily: "PoppinsLight",
    },
  },
  mq: {
    xs: `(min-width: ${size.xs})`,
    sm: `(min-width: ${size.sm})`,
    lg: `(min-width: ${size.lg})`,
  },
};
