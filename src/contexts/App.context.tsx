import React, { useState } from "react";

// Generated by https://quicktype.io

export interface User {
  name: string;
  email: string;
  role: string;
  status: boolean;
  google: boolean;
  uid: string;
}

interface AppContextInterface {
  token: string;
  user: User | null;
  setToken: (value: string) => void; // Esto representa un set de un useState
  setUser: (value: User) => void;
}

export const AppContext = React.createContext({} as AppContextInterface);

export const Provider = ({ children }: any) => {
  const [token, setToken] = useState<string>(
    localStorage.getItem("token") || ""
  );
  const [user, setUser] = useState<User | null>(
    (JSON.parse(localStorage.getItem("user") || "{}") as User) || null
  );

  const values = {
    token,
    setToken,
    user,
    setUser,
  };

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};
