import styled from "styled-components";
import { Anchor, Paragraph, FlexColumn } from "../atoms";

const StyledAnchor = styled(Anchor)`
  color: ${({ theme }) => theme.colors.secondary};
`;

const Category = styled(Paragraph)`
  color: ${({ theme }) => theme.colors.secondary};
  font-weight: ${({ theme }) => theme.fonts.title};
`;

type Link = {
  label: string;
  href: string;
};

export type LinkListingProps = {
  category: string;
  links: Link[];
};

export const LinkListing: React.FC<LinkListingProps> = ({
  category,
  links,
}) => (
  <FlexColumn>
    <Category>{category}</Category>
    {links.map((footerLink) => (
      <StyledAnchor key={footerLink.href} href={footerLink.href}>
        {footerLink.label}
      </StyledAnchor>
    ))}
  </FlexColumn>
);
