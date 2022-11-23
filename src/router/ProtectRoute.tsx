import React from "react";
import { Navigate, useLocation } from "react-router-dom";

interface ProtectRouteProps {
  //JSX.Element is the only type allowed in Route element from react-router-dom
  children: JSX.Element;
}

//ProtectRoute serves as a wrapper for element in Route
export const ProtectRoute = ({ children }: ProtectRouteProps) => {
  //Token check
  const token = true;
  // Validate last location
  const location = useLocation();
  if (!token) {
    return <Navigate to="/" replace state={{ from: location }} />;
  }
  return children;
};
