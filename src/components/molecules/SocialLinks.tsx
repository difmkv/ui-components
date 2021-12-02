import styled from "styled-components";
import { Anchor, Spacer } from "../atoms";
import { IconFactory, SocialIcon } from "../icons";

const Icon = styled(IconFactory)`
  fill: ${({ theme }) => theme.colors.secondary};
  height: 1.5rem;
`;

type SocialLink = {
  icon: SocialIcon;
  href: string;
};

export type SocialLinksProps = {
  socialIcons: SocialLink[];
};

export const SocialLinks: React.FC<SocialLinksProps> = ({ socialIcons }) => (
  <Spacer gap={1}>
    {socialIcons.map(({ icon, href }) => (
      <Anchor key={href} href={href}>
        <Icon icon={icon} />
      </Anchor>
    ))}
  </Spacer>
);
