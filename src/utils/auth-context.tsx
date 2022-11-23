import React from "react";
import { LogInProps } from "types/api";
import { fetchLogin } from "utils/api-service";

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
  const [userToken, setUserToken] = React.useState<string | null>(() => {
    //Check possible value in session storage
    const valueInSessionStorage = sessionStorage.getItem("session-token");
    if (valueInSessionStorage) {
      return valueInSessionStorage;
    }
    return null;
  });

  //Login based on mock api
  const handleLogin = async (loginProps: LogInProps) => {
    const tokenResponse = await fetchLogin(loginProps);
    setUserToken(tokenResponse);
    return !!tokenResponse;
  };

  //Logout can be called to clean session storage
  const handleLogout = () => {
    setUserToken(null);
    sessionStorage.removeItem("session-token");
  };

  const value = {
    token: userToken,
    onLogin: handleLogin,
    onLogout: handleLogout,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

//Custom hook
const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within a AuthProvider");
  }
  return context;
};

export { AuthProvider, useAuth };
