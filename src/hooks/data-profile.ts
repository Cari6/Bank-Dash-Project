import { useContext } from "react";
import { UserDataContext } from "../contexts/data-profile/context";

export const useUserData = () => {
  const context = useContext(UserDataContext);
  if (!context) {
    throw new Error("useUserData must be used within an UserDataProvider");
  }
  return context;
};
