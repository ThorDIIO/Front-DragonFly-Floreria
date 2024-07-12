import { login } from "@/services/auth-services";
import { useRouter } from "next/navigation";
import React, { createContext, useContext, useEffect, useState } from "react";

interface AuthContextProps {
  user: any;
  loading: boolean;
  loginAuth: (username: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps>({
  user: null,
  loading: false,
  loginAuth: async () => {},
  logout: () => {},
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      //TODO: Validar token con el backend

      const decodedToken = JSON.parse(atob(token.split(".")[1]));

      setUser({ token, ...decodedToken });
    }
    setLoading(false);
  }, []);

  const loginAuth = async (username: string, password: string) => {
    try {
      const response = await login(username, password);
      if (!response) {
        throw new Error("Invalid credentials");
      }
      localStorage.setItem("token", response);
      router.push("/dashboard/products");
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
    router.push("/auth/login");
  };

  return (
    <AuthContext.Provider value={{ user, loading, loginAuth, logout }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
