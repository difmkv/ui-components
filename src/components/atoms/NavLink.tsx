import styled from "styled-components";
import { ReactNode } from "react";
import { Anchor } from "./Typography";

export const StyledNavLink = styled(Anchor)`
  color: ${({ theme }) => theme.colors.secondary};
`;

export type NavLinkProps = {
  children: ReactNode;
};

export const NavLink: React.FC<NavLinkProps> = ({ children }) => (
  <StyledNavLink>{children}</StyledNavLink>
);
