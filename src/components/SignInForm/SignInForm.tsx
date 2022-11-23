import React from "react";
import { LogInProps } from "types/api";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { FormWrapper, Form, Header, Title } from "./signInForm.styled";

interface SignInFormProps {
  handleData: (formValues: LogInProps) => void;
}

export const SignInForm = ({ handleData }: SignInFormProps) => {
  //Take values directly from the form
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    //Prevent default and add custom behavior
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const fieldValues = Object.fromEntries(formData.entries());
    //Handle values from FormData
    const parsedValues = {
      userName:
        typeof fieldValues["user_name"] === "string"
          ? fieldValues["user_name"]
          : "",
      userPassword:
        typeof fieldValues["user_password"] === "string"
          ? fieldValues["user_password"]
          : "",
    };
    handleData(parsedValues);
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
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
            <button type="submit">Log in</button>
          </Form>
        </FormWrapper>
      </Box>
    </Container>
  );
};
