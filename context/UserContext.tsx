"use client";

import IUser from "@/types/User";
import { createContext, useContext } from "react";

const DefaultUser: IUser = { email: "", name: "" };
const UserContext = createContext({
  user: DefaultUser,
});

export const UserProvider = ({
  children,
  user,
}: Readonly<{
  children: React.ReactNode;
  user: IUser;
}>) => {
  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
