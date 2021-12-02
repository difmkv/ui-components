import { ReactNode } from "react";
import styled from "styled-components";

export const StyledTag = styled.button<TagProps>`
  color: ${({ active, theme }) =>
    active ? theme.colors.tertiary : theme.colors.secondary};
  background: ${({ active, theme }) =>
    active ? theme.colors.secondary : theme.colors.tertiary};
  max-width: max-content;
  padding: 0.25rem 0.5rem;
  border-radius: 3px;
  border: 0;
`;

export type TagProps = {
  active?: boolean;
  children: ReactNode;
};

export const Tag: React.FC<TagProps> = (props) => (
  <StyledTag {...props}>{props.children}</StyledTag>
);
