import styled from "styled-components";
import { Paragraph, Tag, Spacer } from "../atoms";

export const TagParagraph = styled(Paragraph)`
  color: ${({ theme }) => theme.colors.secondary};
`;

export type TagListingProps = {
  category: string;
  tags: {
    active: boolean;
    tag: string;
  }[];
};

export const TagListing: React.FC<TagListingProps> = ({ category, tags }) => (
  <Spacer gap={1}>
    <TagParagraph>{category}</TagParagraph>
    {tags.map(({ tag, active }, index) => (
      <Tag key={index} active={active}>
        {tag}
      </Tag>
    ))}
  </Spacer>
);
