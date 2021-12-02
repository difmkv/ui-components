import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
`;

export const FlexColumn = styled(Flex)`
  flex-direction: column;
`;

export const FlexY = styled(Flex)`
  align-items: center;
`;

export const Centered = styled(FlexY)`
  justify-content: center;
`;

export const FlexBetween = styled(FlexY)`
  justify-content: space-between;
`;

export const Grid = styled.div`
  display: grid;
`;
