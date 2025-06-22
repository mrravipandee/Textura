import React, { createContext, useState, type ReactNode } from "react";

// Define types
interface User {
  credits: number;
  // Define the shape of your user object
  id: string;
  name: string;
  email: string;
  // add other fields as needed
}

interface AppContextType {
  logout(): unknown;
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  showLogin: unknown;
  setShowLogin: React.Dispatch<React.SetStateAction<unknown>>;
}

// Create context with default value
// eslint-disable-next-line react-refresh/only-export-components
export const AppContext = createContext<AppContextType | undefined>(undefined);

// Props type for provider
interface AppContextProviderProps {
  children: ReactNode;
}

const AppContextProvider: React.FC<AppContextProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(false);
  const [showLogin, setShowLogin] = useState<unknown>(false);

  const value: AppContextType = {
    user,
    setUser, showLogin, setShowLogin,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
