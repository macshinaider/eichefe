"use client";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { verifyAuth } from "@/lib/auth";

interface AuthContextProps {
  isAuthenticated: boolean;
  authenticateUser: () => void;
  setLoggout: () => void;
}

interface AuthData {
  id?: number;
  name?: string;
  email?: string;
  userId: number;
  iat: number;
  exp?: number;
}

interface AuthContextProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthContextProvider");
  }
  return context;
};

export const AuthContextProvider: React.FC<AuthContextProviderProps> = ({
  children,
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<any>();

  const router = useRouter();

  const authenticateUser = async () => {
    const token = Cookies.get("token");
    const dados = await verifyAuth(token!);
    if (typeof dados === "object" && dados !== null) {
      const { userId } = dados as AuthData;
      setUser(userId);
      setIsAuthenticated(true);
    }
  };
  useEffect(() => {
    console.log("🚀 ~ file: AuthContext.tsx:33 ~ user:", user);
  }, [user]);
  const setLoggout = () => {
    Cookies.remove("token");
    setIsAuthenticated(false);
    router.push("/login");
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, authenticateUser, setLoggout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
