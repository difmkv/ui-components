import { Logo, FlexBetween } from "../atoms";
import { NavLogin, NavLoginProps, NavMenu, NavMenuProps } from "../molecules";

export type NavBarProps = {
  navMenu: NavMenuProps["navMenu"];
  navLogin: NavLoginProps["navLogin"];
};

export const NavBar: React.FC<NavBarProps> = ({ navMenu, navLogin }) => (
  <FlexBetween>
    <Logo />
    <NavMenu navMenu={navMenu} />
    <NavLogin navLogin={navLogin} />
  </FlexBetween>
);
