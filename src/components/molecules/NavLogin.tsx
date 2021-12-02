import { Button, NavLink, Spacer } from "../atoms";

export type NavLoginProps = {
  navLogin: [{ label: string }, { label: string }];
};

export const NavLogin: React.FC<NavLoginProps> = ({ navLogin }) => (
  <Spacer gap={4}>
    <NavLink>{navLogin[0].label}</NavLink>
    <Button>{navLogin[1].label}</Button>
  </Spacer>
);
