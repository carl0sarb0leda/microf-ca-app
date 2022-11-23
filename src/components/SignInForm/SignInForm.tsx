import React from "react";
import { LogInProps } from "types/api";

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
    <form onSubmit={handleSubmit}>
      <h2>Clinical Portal</h2>
      <label>
        Username
        <input name="user_name" required autoComplete="off" />
      </label>
      <label>
        Password
        <input
          type="password"
          name="user_password"
          required
          autoComplete="off"
        />
      </label>
      <button type="submit">Log in</button>
    </form>
  );
};
