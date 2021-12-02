import styled from "styled-components";
import { Logo, Paragraph, Flex, Spacer } from "../atoms";
import { SocialLinks, SocialLinksProps } from "../molecules";
import { ColumnListing, ColumnListingProps } from "../organisms";

export type FooterProps = {
  tagline: string;
  socialIcons: SocialLinksProps["socialIcons"];
  columns: ColumnListingProps["columns"];
};

const Tagline = styled(Paragraph)`
  color: ${({ theme }) => theme.colors.secondary};
`;

export const Footer: React.FC<FooterProps> = ({
  tagline,
  socialIcons,
  columns,
}) => (
  <Flex>
    <Spacer rowGap={1} mr={3}>
      <Logo />
      <Tagline>{tagline}</Tagline>
      <SocialLinks socialIcons={socialIcons} />
    </Spacer>
    <ColumnListing columns={columns} />
  </Flex>
);
