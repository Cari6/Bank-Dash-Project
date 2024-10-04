"use client";
import React, { useEffect, useState } from "react";
import { UserData, UserDataContext } from "./context";

export const UserDataProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [user, setUser] = useState<UserData>({
    name: "",
    userName: "",
    email: "",
    password: "",
    date: "",
    presentAddress: "",
    permanentAddress: "",
    city: "",
    avatarUrl: "/assets/image/avatar.svg",
  });

  useEffect(() => {
    const savedData = localStorage.getItem("profileData");
    if (savedData) {
      setUser(JSON.parse(savedData));
    }
  }, []);

  return (
    <UserDataContext.Provider value={{ user, setUser }}>
      {children}
    </UserDataContext.Provider>
  );
};

export default UserDataProvider;
