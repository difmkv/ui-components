import { NavLink, Spacer } from "../atoms";

export type NavMenuProps = {
  navMenu: { label: string }[];
};

export const NavMenu: React.FC<NavMenuProps> = ({ navMenu }) => (
  <Spacer gap={2}>
    {navMenu.map(({ label }) => (
      <NavLink key={label}>{label}</NavLink>
    ))}
  </Spacer>
);
