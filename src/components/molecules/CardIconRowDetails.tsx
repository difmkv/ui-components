import styled from "styled-components";
import { withWrapper, WrapperProps } from "../hocs";
import { Details, DetailsProps } from "../molecules";
import { IconFactory } from "../icons";
import { Flex } from "../atoms";

const Container = styled(Flex)`
  align-items: flex-start;
`;

const Icon = styled(IconFactory)`
  fill: ${({ theme }) => theme.colors.main};
  width: 5rem;
  margin: 0.5rem 1rem 0 0;
`;

const FullWidth = styled.div`
  width: 100%;
`;

const CardIconRow: React.FC<WrapperProps> = ({ icon, children }) => (
  <Container>
    <Icon icon={icon} />
    <FullWidth>{children}</FullWidth>
  </Container>
);

export const CardIconRowDetails = withWrapper<DetailsProps>(
  CardIconRow,
  Details
);
