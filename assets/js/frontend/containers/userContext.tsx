import React, { ReactNode, createContext, useContext } from "react";

const UserContext = createContext(undefined);

type UserProviderProps = {
  children: ReactNode;
  value?: User;
};

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const user = {
    fullname: "Lebohang Mdlongwa",
    email: "lebomdlongwa@.gmail.com",
    admin: false,
  };

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export const useUser = () => useContext(UserContext);
