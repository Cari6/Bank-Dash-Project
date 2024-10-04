import React, { createContext } from "react";

export interface UserData {
  name: string;
  userName: string;
  email: string;
  password: string;
  date: string;
  presentAddress: string;
  permanentAddress: string;
  city: string;
  avatarUrl?: string;
}

interface UserDataContextProps {
  user: UserData;
  setUser: React.Dispatch<React.SetStateAction<UserData>>;
}

export const UserDataContext = createContext<UserDataContextProps | undefined>(
  undefined
);
