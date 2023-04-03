import React from 'react'
import {LogInProps} from 'types/api'
import {Container, Box, Button} from '@mui/material'
import {
  FormWrapper,
  Form,
  Header,
  Title,
  TempBtnWrapper,
} from './signInForm.styled'

interface SignInFormProps {
  handleData: (formValues: LogInProps) => void
}

export const SignInForm = ({handleData}: SignInFormProps) => {
  //Take values directly from the form
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    //Prevent default and add custom behavior
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const fieldValues = Object.fromEntries(formData.entries())
    //Handle values from FormData
    const parsedValues = {
      userName:
        typeof fieldValues['user_name'] === 'string'
          ? fieldValues['user_name']
          : '',
      userPassword:
        typeof fieldValues['user_password'] === 'string'
          ? fieldValues['user_password']
          : '',
    }
    handleData(parsedValues)
  }

  const handleTempCredentials = () => {
    alert('username | password\njoshs | joshs_pw\namyb | amyb_pw')
  }

  return (
    <Container maxWidth="sm">
      <Box sx={{my: 4}}>
        <Header>
          <Title>Clinical Portal</Title>
          <Title>Sign In</Title>
        </Header>
        <FormWrapper>
          <Form onSubmit={handleSubmit}>
            <div>
              <label>
                Username
                <input name="user_name" required autoComplete="off" />
              </label>
            </div>
            <div>
              <label>
                Password
                <input
                  type="password"
                  name="user_password"
                  required
                  autoComplete="off"
                />
              </label>
            </div>
            <Button type="submit">Log in</Button>
          </Form>
        </FormWrapper>
      </Box>
      <TempBtnWrapper>
        <Button
          variant="text"
          color="secondary"
          size="small"
          onClick={handleTempCredentials}
        >
          Temp credentials
        </Button>
      </TempBtnWrapper>
    </Container>
  )
}
