import styled from "styled-components";
import { withWrapper, WrapperProps } from "../hocs";
import { Details, DetailsProps } from "../molecules";
import { IconFactory } from "../icons";
import { Centered } from "../atoms";

const Container = styled.div`
  position: relative;
  border: ${({ theme }) => `1px solid ${theme.colors.main}`};
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.colors.gray} 0 0.1rem 0.2rem;
  border-radius: 0.5rem;
  padding: 3rem;
`;

const Badge = styled(Centered)`
  position: absolute;
  top: 0;
  left: 50%;
  width: 4rem;
  height: 4rem;
  border-radius: 100%;
  transform: translate(-50%, -50%);
  background: ${({ theme }) => theme.colors.main};
`;

const Icon = styled(IconFactory)`
  height: 2rem;
  fill: ${({ theme }) => theme.colors.white};
`;

const CardIconColumn: React.FC<WrapperProps> = ({ icon, children }) => (
  <Container>
    <Badge>
      <Icon icon={icon} />
    </Badge>
    {children}
  </Container>
);

export const CardIconColumnDetails = withWrapper<DetailsProps>(
  CardIconColumn,
  Details
);
