import styled from "styled-components";
import { FlexY } from "./Display";
import { IconFactory } from "../icons";

const Icon = styled(IconFactory)`
  fill: ${({ theme }) => theme.colors.main};
  height: 3rem;
`;

const LogoText = styled.p`
  color: ${({ theme }) => theme.colors.main};
  font-size: 1.5rem;
`;

export const Logo: React.FC = () => (
  <FlexY>
    <Icon icon="logo" />
    <LogoText>segment</LogoText>
  </FlexY>
);
