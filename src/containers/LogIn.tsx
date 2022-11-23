import React from "react";
import { useAuth } from "utils/auth-context";
import { useNavigate, useLocation } from "react-router-dom";
import { SignInForm } from "components";
import { LogInProps } from "types/api";

export const LogIn = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { onLogin } = useAuth();

  const handleLogin = async (formValues: LogInProps) => {
    //Authentication redirect in container
    const isAuthenticated = await onLogin(formValues);
    if (isAuthenticated) {
      //Check previous possible route
      const originPath = location.state?.from?.pathname || "/dashboard";
      navigate(originPath);
    }
  };

  return <SignInForm handleData={handleLogin} />;
};
