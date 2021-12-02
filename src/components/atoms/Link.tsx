import styled from "styled-components";
import { ReactNode } from "react";
import { Anchor } from "./Typography";

export const StyledLink = styled(Anchor)`
  color: ${({ theme }) => theme.colors.main};

  &:after {
    content: "➜";
    display: inline-block;
    margin-left: 0.5rem;
  }
`;

export type LinkProps = {
  children: ReactNode;
};

export const Link: React.FC<LinkProps> = ({ children }) => (
  <StyledLink>{children}</StyledLink>
);
