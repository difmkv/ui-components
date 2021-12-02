import styled from "styled-components";
import { HeaderThree, Paragraph } from "../atoms";

const Label = styled(Paragraph)`
  color: ${({ theme }) => theme.colors.darkGrey};
`;

export type DetailsProps = {
  title: string;
  description: string;
  label: string;
};

export const Details: React.FC<DetailsProps> = ({
  title,
  description,
  label,
}) => (
  <>
    <HeaderThree data-testid="detail-title">{title}</HeaderThree>
    <Paragraph data-testid="detail-description">{description}</Paragraph>
    <Label data-testid="detail-label">{label}</Label>
  </>
);
