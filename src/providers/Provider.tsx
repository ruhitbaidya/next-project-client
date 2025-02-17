import UserProvider from "@/context/AuthContext";
import { ReactNode } from "react";

const Provider = ({ children }: { children: ReactNode }) => {
  return <UserProvider>{children}</UserProvider>;
};

export default Provider;
