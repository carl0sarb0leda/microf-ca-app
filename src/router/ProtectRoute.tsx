import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "utils/auth-context";

interface ProtectRouteProps {
  //JSX.Element is the only type allowed in Route element from react-router-dom
  children: JSX.Element;
}

//ProtectRoute serves as a wrapper for element in Route
export const ProtectRoute = ({ children }: ProtectRouteProps) => {
  //Token check
  const { token } = useAuth();
  // Validate last location
  const location = useLocation();
  if (!token) {
    return <Navigate to="/" replace state={{ from: location }} />;
  }
  return children;
};
