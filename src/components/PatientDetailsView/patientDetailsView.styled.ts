import styled from '@emotion/styled'
export const TabNavPanel = styled.div<{isHidden: boolean}>`
  ${({isHidden}) =>
    isHidden && {
      display: 'none',
    }}
`
export const TabList = styled.div`
  display: grid;
  grid-auto-flow: column;
  justify-content: center;
`
