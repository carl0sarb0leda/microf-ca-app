import * as React from "react";
import Routes from "router/Routes";
import { AuthProvider } from "utils/auth-context";

export default function App() {
  return (
    <AuthProvider>
      <Routes />;
    </AuthProvider>
  );
}
