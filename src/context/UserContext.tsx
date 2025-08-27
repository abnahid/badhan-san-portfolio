"use client";
import { createContext, ReactNode, useContext, useState } from "react";

type User = {
  name: string;
  email: string;
  avatar: string;
  role: string;
};

type UserContextType = {
  user: User;
  setUser: (user: User) => void;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User>({
    name: "Ben Affleck",
    email: "test@example.com",
    avatar: "https://avatar.iran.liara.run/public/1",
    role: "User",
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (!context) throw new Error("useUser must be used within UserProvider");
  return context;
}
