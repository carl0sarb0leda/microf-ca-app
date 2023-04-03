import styled from '@emotion/styled'

export const Header = styled.div`
  display: block;
  text-align: center;
  padding-bottom: 1rem;
`
export const Title = styled.h2`
  margin: 0;
`
export const FormWrapper = styled.div`
  display: block;
  text-align: center;
`
export const Form = styled.form`
  display: grid;
  justify-content: center;
  gap: 1rem;

  label {
    display: grid;
    grid-auto-flow: column;
    gap: 0.5rem;
  }
`
export const TempBtnWrapper = styled.div`
  display: block;
  text-align: end;
`
