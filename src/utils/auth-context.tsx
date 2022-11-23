import React from "react";
import { LogInProps } from "types/api";

type AuthContextValueProps = {
  token: string | null;
  onLogin: (value: LogInProps) => Promise<boolean>;
  onLogout: () => void;
};
type AuthProviderProps = { children: React.ReactNode };

const AuthContext = React.createContext<AuthContextValueProps | undefined>(
  undefined
);

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [userToken, setUserToken] = React.useState<string | null>(null);

  const handleLogin = async (loginProps: LogInProps) => {
    const tokenResponse = "TestToken";
    setUserToken(tokenResponse);
    return !!tokenResponse;
  };

  const handleLogout = () => {
    setUserToken(null);
  };

  const value = {
    token: userToken,
    onLogin: handleLogin,
    onLogout: handleLogout,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within a AuthProvider");
  }
  return context;
};

export { AuthProvider, useAuth };
