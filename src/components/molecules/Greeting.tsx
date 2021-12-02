import styled from "styled-components";
import { HeaderOne, HeaderTwo } from "../atoms";

export type GreetingProps = {
  title: string;
  subtitle: string;
};

const Container = styled.div`
  text-align: center;
  padding: 0 15rem;

  ${HeaderOne},
  ${HeaderTwo} {
    color: ${({ theme }) => theme.colors.main};
  }
`;

export const Greeting: React.FC<GreetingProps> = ({ title, subtitle }) => (
  <Container>
    <HeaderOne>{title}</HeaderOne>
    <HeaderTwo>{subtitle}</HeaderTwo>
  </Container>
);
