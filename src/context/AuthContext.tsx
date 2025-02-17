"use client";
import { getUser } from "@/services/AuthServices";
import { User } from "@/types";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";

interface IUserProvider {
  user: User | null;
  loading: boolean;
  setUser: (user: User | null) => void;
  setLoading: Dispatch<SetStateAction<boolean>>;
}
const UserContext = createContext<IUserProvider | undefined>(undefined);

const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [user, setUser] = useState<User | null>(null);
  const handelUser = async () => {
    const user = await getUser();
    setUser(user);
    setLoading(false);
  };
  useEffect(() => {
    handelUser();
  }, [loading]);
  return (
    <UserContext.Provider value={{ loading, setLoading, user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const UseUser = () => {
  const user = useContext(UserContext);
  if (user === undefined) {
    throw new Error("use user context indise");
  }
  return user;
};

export default UserProvider;
