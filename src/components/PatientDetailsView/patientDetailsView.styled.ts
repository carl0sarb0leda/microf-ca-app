import styled from "@emotion/styled";
export const TabNavPanel = styled.div<{ isHidden: boolean }>`
  ${({ isHidden }) =>
    isHidden && {
      display: "none",
    }}
`;