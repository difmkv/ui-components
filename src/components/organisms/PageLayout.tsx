import styled from "styled-components";
import { ReactNode } from "react";
import { Footer, FooterProps, NavBar, NavBarProps } from ".";
import { Background } from "../atoms";

const Container = styled.div`
  padding: 1rem 3rem;
  max-width: 80rem;
  min-width: 60rem;
  margin: 0 auto;
`;

export type PageLayoutProps = {
  navBar: NavBarProps;
  footer: FooterProps;
  children?: ReactNode;
};

export const PageLayout: React.FC<PageLayoutProps> = ({
  navBar,
  footer,
  children,
}) => (
  <>
    <Background>
      <Container>
        <NavBar {...navBar} />
      </Container>
    </Background>
    <Container>{children}</Container>
    <Background>
      <Container>
        <Footer {...footer} />
      </Container>
    </Background>
  </>
);
