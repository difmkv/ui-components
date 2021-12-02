import styled from "styled-components";
import { Spacer, Link, Thumbnail, ThumbnailProps, Tag } from "../atoms";
import { Details, DetailsProps } from "./Details";

export const StyledCard = styled.div`
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.colors.gray} 0 0.125rem 0.325rem;
  border-radius: 0.5rem;

  &:hover {
    box-shadow: ${({ theme }) => theme.colors.gray} 0 1.5rem 2rem -0.75rem;
  }
`;

export type CardProps = ThumbnailProps & DetailsProps;

export const Card: React.FC<CardProps> = ({
  src,
  alt,
  title,
  description,
  label,
}) => (
  <StyledCard data-testid="card">
    <Thumbnail src={src} alt={alt} />
    <Spacer rowGap={1} p={1.5}>
      <Tag data-testid="card-tag">Course</Tag>
      <Details title={title} description={description} label={label} />
      <Link>Sign up now</Link>
    </Spacer>
  </StyledCard>
);
