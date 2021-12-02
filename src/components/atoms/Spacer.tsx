import styled from "styled-components";

type Padding = "p" | "px" | "py";
type Margin = "m" | "mt" | "mb" | "my" | "mx" | "mr";
type Gap = "gap" | "rowGap" | "columnGap";

type Key = Margin | Padding | Gap;

type Props = {
  [k in Key]: number;
};

type SpacerProps = Partial<Props>;

const StyledSpacer = styled.div<SpacerProps>`
  ${({ p }) => p && `padding: ${p}rem;`}
  ${({ py }) => py && `padding: ${py}rem 0;`}
  ${({ px }) => px && `padding: 0 ${px}rem;`}

  ${({ m }) => m && `margin: ${m}rem;`}
  ${({ mt }) => mt && `margin-top: ${mt}rem;`}
  ${({ mb }) => mb && `margin-bottom: ${mb}rem;`}
  ${({ my }) => my && `margin: ${my}rem 0;`}
  ${({ mx }) => mx && `margin: 0 ${mx}rem;`}
  ${({ mr }) => mr && `margin-right: ${mr}rem;`}

  ${({ gap }) => gap && `display: flex; gap ${gap}rem`}
  ${({ rowGap }) =>
    rowGap && `display: flex; flex-direction: column; row-gap ${rowGap}rem`}
  ${({ columnGap }) =>
    columnGap &&
    `display: flex; flex-direction: column; column-gap ${columnGap}rem`}
`;

export const Spacer: React.FC<SpacerProps> = ({ children, ...restOfProps }) => (
  <StyledSpacer {...restOfProps}>{children}</StyledSpacer>
);
