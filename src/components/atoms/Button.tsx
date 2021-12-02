import styled from "styled-components";
import { ReactNode } from "react";
import { Anchor } from "./Typography";

export const StyledButton = styled(Anchor)`
  background: ${({ theme }) => theme.colors.main};
  color: ${({ theme }) => theme.colors.white};
  padding: 0.5rem 1rem;
  border-radius: 3px;
  border: 0;
`;

export type ButtonProps = {
  children: ReactNode;
};

export const Button: React.FC<ButtonProps> = ({ children }) => (
  <StyledButton as="button">{children}</StyledButton>
);
