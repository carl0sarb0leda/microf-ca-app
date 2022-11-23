import React from "react";
import { useAuth } from "utils/auth-context";
import { useNavigate, useLocation } from "react-router-dom";

export const LogIn = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { onLogin } = useAuth();

  const handleLogin = async (formValues: any) => {
    const isAuthenticated = await onLogin({
      userName: formValues["user_name"],
      userPassword: formValues["user_password"],
    });
    if (isAuthenticated) {
      const originPath = location.state?.from?.pathname || "/dashboard";
      navigate(originPath);
    }
  };

  return <form>SignIn</form>
};
