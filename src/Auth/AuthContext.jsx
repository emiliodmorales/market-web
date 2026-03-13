import { createContext, useContext, useEffect, useState } from "react";

const API = import.meta.env.VITE_API_BASE + "/users";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const data = window.sessionStorage.getItem("token");
    if (data) {
      setToken(data);
    }
  }, []);

  const register = async (credentials) => {
    const response = await fetch(API + "/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    });
    const result = await response.json();
    if (!response.ok) {
      throw Error(result.message);
    }
    console.log(result);
  };

  const login = async (credentials) => {
    const response = await fetch(API + "/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    });
    const result = await response.json();
    if (!response.ok) {
      throw Error(result.message);
    }
    console.log(result);
  };

  const logout = () => {
    setToken(null);
  };

  const value = { token, register, login, logout };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw Error("useAuth must be used within an AuthProvider");
  return context;
}
