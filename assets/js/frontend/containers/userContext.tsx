import React, { ReactNode, createContext, useContext, useState } from "react";

const UserContext = createContext(undefined);

type UserProviderProps = {
  children: ReactNode;
};

export const UserProvider: React.FC<UserProviderProps> = (props) => {
  const { children } = props;
  const [user, setUser] = useState<UserObject>({
    name: null,
    surname: null,
    username: null,
    avatar: null,
    email: null,
    // admin: false,
    admin: true,
  });

  const updateUser = (newObject: UserObject) =>
    setUser((prevState) => ({ ...prevState, ...newObject }));

  const value = {
    user,
    updateUser,
    admin: user.admin,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useUser = () => useContext(UserContext);
