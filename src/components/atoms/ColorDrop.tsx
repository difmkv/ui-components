import styled from "styled-components";

export const ColorDrop = styled.div`
  position: relative;

  &:after {
    content: "";
    position: absolute;
    top: -30rem;
    left: -10rem;
    z-index: -1;
    background: ${({ theme }) => theme.colors.darkAccent};
    width: calc(100vw + 50rem);
    height: calc(50vh + 50rem);
    transform: rotateZ(5deg);
    min-height: 50rem;
  }
`;
