import styled from "styled-components";

export type ThumbnailProps = {
  src: string;
  alt: string;
};

const Image = styled.img`
  width: 100%;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
`;

export const Thumbnail: React.FC<ThumbnailProps> = ({ src, alt }) => (
  <Image src={src} alt={alt} />
);
